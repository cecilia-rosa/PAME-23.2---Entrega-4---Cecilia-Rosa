import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IService } from './prisma/i/i.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, IService],
})
export class AppModule {}
