import { Injectable } from '@nestjs/common';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { UpdateRelatorioDto } from './dto/update-relatorio.dto';
import { PrismaService } from 'src/prisma/i/i.service';

@Injectable()
export class RelatorioService {
  constructor(private readonly prisma: PrismaService){}
  create(createRelatorioDto: CreateRelatorioDto) {
    return this.prisma.relatorio.create({data: createRelatorioDto});
  }

  findAll() {
    return `This action returns all relatorio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relatorio`;
  }

  update(id: number, updateRelatorioDto: UpdateRelatorioDto) {
    return `This action updates a #${id} relatorio`;
  }

  remove(id: number) {
    return `This action removes a #${id} relatorio`;
  }
}
