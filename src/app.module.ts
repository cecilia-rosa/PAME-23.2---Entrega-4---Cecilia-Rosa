import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IService } from './prisma/i/i.service';
import { FuncionarioModule } from './funcionario/funcionario.module';

@Module({
  imports: [FuncionarioModule],
  controllers: [AppController],
  providers: [AppService, IService],
})
export class AppModule {}
