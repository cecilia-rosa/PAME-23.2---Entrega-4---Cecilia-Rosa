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
    return `This action returns all mesa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mesa`;
  }

  update(id: number, updateMesaDto: UpdateMesaDto) {
    return `This action updates a #${id} mesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} mesa`;
  }
}
