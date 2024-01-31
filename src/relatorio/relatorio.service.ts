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
    return this.prisma.relatorio.findMany();
  }

  findOne(id: number) {
    return this.prisma.relatorio.findUnique({where: {id}});
  }

  update(id: number, updateRelatorioDto: UpdateRelatorioDto) {
    return this.prisma.relatorio.update({where:{id: id}, data: updateRelatorioDto});
  }

  remove(id: number) {
    this.prisma.relatorio.delete({where:{id}});
    return 'O relatorio foi deletado com sucesso'
  }
}
