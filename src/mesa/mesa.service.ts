import { Injectable } from '@nestjs/common';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { PrismaService } from 'src/prisma/i/i.service';

@Injectable()
export class MesaService {
  constructor(private readonly prisma: PrismaService){}
  create(createMesaDto: CreateMesaDto) {
    return this.prisma.mesa.create({data: createMesaDto});
  }

  findAll() {
    return this.prisma.mesa.findMany();
  }

  findOne(id: number) {
    return this.prisma.mesa.findUnique({where: {id}});
  }

  update(id: number, updateMesaDto: UpdateMesaDto) {
    return this.prisma.mesa.update({where:{id: id}, data: updateMesaDto});
  }

  remove(id: number) {
    this.prisma.mesa.delete({where:{id}});
    return 'A mesa foi deletada com sucesso'
  }
}
