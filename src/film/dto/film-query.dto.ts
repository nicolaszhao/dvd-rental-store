import { IsOptional, IsString, IsInt, IsEnum, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { mpaa_rating } from '@prisma/client';

export class FilmQueryDto {
  @ApiPropertyOptional({
    description: '电影标题（模糊搜索，不区分大小写）',
    example: 'academy',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: '上映年份',
    example: 2006,
    minimum: 1900,
    maximum: 2100,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1900)
  @Max(2100)
  releaseYear?: number;

  @ApiPropertyOptional({
    description: 'MPAA 电影评分',
    enum: ['G', 'PG', 'PG_13', 'R', 'NC_17'],
    example: 'PG',
  })
  @IsOptional()
  @IsEnum(mpaa_rating)
  rating?: mpaa_rating;

  @ApiPropertyOptional({
    description: '页码',
    default: 1,
    minimum: 1,
    example: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({
    description: '每页数量',
    default: 10,
    minimum: 1,
    maximum: 100,
    example: 10,
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;
}
