import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FilmModule } from './film/film.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [PrismaModule, FilmModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
