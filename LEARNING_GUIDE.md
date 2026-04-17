# Prisma + NestJS 学习指南

本项目是一个使用 **Prisma 7** 和 **NestJS 11** 构建的 DVD 租赁数据库 API 示例。以下是关键学习步骤。

---

## 一、项目初始化

### 1.1 创建 NestJS 项目

```bash
npx @nestjs/cli new dvdrental-nest-app --package-manager npm
```

### 1.2 安装 Prisma 依赖

```bash
# 安装 Prisma CLI (开发依赖)
npm install prisma --save-dev

# 安装 Prisma Client
npm install @prisma/client

# Prisma 7 需要使用 adapter 模式连接数据库
npm install @prisma/adapter-pg pg
npm install -D @types/pg
```

---

## 二、Prisma 配置

### 2.1 初始化 Prisma

```bash
npx prisma init --datasource-provider postgresql
```

此命令会创建：
- `prisma/schema.prisma` - Prisma schema 文件
- `.env` - 环境变量文件
- `prisma.config.ts` - Prisma 配置文件

### 2.2 配置数据库连接

编辑 `.env` 文件：

```env
DATABASE_URL="postgresql://postgres:123456@127.0.0.1:5432/dvdrental?schema=public"
```

### 2.3 从现有数据库生成 Schema（Introspection）

```bash
npx prisma db pull
```

这会读取数据库结构并自动生成 Prisma models。

### 2.4 生成 Prisma Client

```bash
npx prisma generate
```

---

## 三、NestJS 集成

### 3.1 创建 PrismaService

Prisma 7 使用 **adapter 模式** 连接数据库，这是与之前版本的重大变化：

```typescript
// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private pool: Pool;

  constructor() {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const adapter = new PrismaPg(pool);
    super({ adapter });
    this.pool = pool;
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.pool.end();
  }
}
```

### 3.2 创建 PrismaModule

使用 `@Global()` 装饰器使其在整个应用中可用：

```typescript
// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

### 3.3 在 AppModule 中导入

```typescript
// src/app.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FilmModule } from './film/film.module';

@Module({
  imports: [PrismaModule, FilmModule],
  // ...
})
export class AppModule {}
```

---

## 四、构建 Film 模块

### 4.1 创建 DTO（数据传输对象）

```typescript
// src/film/dto/film-query.dto.ts
import { IsOptional, IsString, IsInt, IsEnum, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { mpaa_rating } from '@prisma/client';

export class FilmQueryDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  releaseYear?: number;

  @IsOptional()
  @IsEnum(mpaa_rating)
  rating?: mpaa_rating;
}
```

### 4.2 创建 Service

```typescript
// src/film/film.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FilmQueryDto } from './dto/film-query.dto';

@Injectable()
export class FilmService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(query: FilmQueryDto) {
    const { title, releaseYear, rating } = query;

    return this.prisma.film.findMany({
      where: {
        ...(title && {
          title: { contains: title, mode: 'insensitive' },
        }),
        ...(releaseYear && { release_year: releaseYear }),
        ...(rating && { rating }),
      },
      select: {
        film_id: true,
        title: true,
        description: true,
        release_year: true,
        rating: true,
        rental_rate: true,
        length: true,
        language: { select: { name: true } },
      },
      orderBy: { title: 'asc' },
    });
  }
}
```

### 4.3 创建 Controller

```typescript
// src/film/film.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmQueryDto } from './dto/film-query.dto';

@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  findAll(@Query() query: FilmQueryDto) {
    return this.filmService.findAll(query);
  }
}
```

---

## 五、启用全局验证

```typescript
// src/main.ts
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,        // 自动转换类型
      whitelist: true,        // 过滤未定义的属性
      forbidNonWhitelisted: true, // 拒绝未知属性
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

---

## 六、API 测试

### 启动开发服务器

```bash
npm run start:dev
```

### 测试接口

```bash
# 查询所有电影
curl http://localhost:3000/films

# 按标题筛选
curl "http://localhost:3000/films?title=academy"

# 按评分筛选
curl "http://localhost:3000/films?rating=R"

# 组合筛选
curl "http://localhost:3000/films?releaseYear=2006&rating=G"
```

---

## 七、关键概念总结

| 概念 | 说明 |
|------|------|
| **Prisma Schema** | 定义数据模型，通过 `prisma db pull` 从现有数据库生成 |
| **Prisma Client** | 类型安全的数据库查询客户端，通过 `prisma generate` 生成 |
| **Adapter 模式** | Prisma 7 新特性，使用 `@prisma/adapter-pg` 连接 PostgreSQL |
| **PrismaService** | NestJS 服务，封装 PrismaClient 并实现生命周期管理 |
| **DTO** | 数据传输对象，配合 class-validator 进行请求验证 |
| **ValidationPipe** | NestJS 全局管道，自动验证和转换请求数据 |

---

## 八、项目结构

```
dvdrental-nest-app/
├── prisma/
│   └── schema.prisma      # Prisma 数据模型
├── src/
│   ├── prisma/
│   │   ├── prisma.module.ts
│   │   └── prisma.service.ts
│   ├── film/
│   │   ├── dto/
│   │   │   └── film-query.dto.ts
│   │   ├── film.controller.ts
│   │   ├── film.module.ts
│   │   └── film.service.ts
│   ├── app.module.ts
│   └── main.ts
├── .env
└── package.json
```

---

## 九、常用 Prisma 命令

```bash
npx prisma init              # 初始化 Prisma
npx prisma db pull           # 从数据库拉取 schema
npx prisma generate          # 生成 Prisma Client
npx prisma studio            # 打开数据库可视化工具
npx prisma migrate dev       # 创建迁移（开发环境）
npx prisma migrate deploy    # 部署迁移（生产环境）
```

---

## 十、参考资源

- [Prisma 官方文档](https://www.prisma.io/docs)
- [Prisma + NestJS 集成指南](https://www.prisma.io/docs/guides/nestjs)
- [NestJS 官方文档](https://docs.nestjs.com)
- [class-validator 文档](https://github.com/typestack/class-validator)
