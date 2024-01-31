import { Module } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { RelatorioController } from './relatorio.controller';
import { PrismaService } from 'src/prisma/i/i.service';

@Module({
  controllers: [RelatorioController],
  providers: [RelatorioService, PrismaService],
})
export class RelatorioModule {}
