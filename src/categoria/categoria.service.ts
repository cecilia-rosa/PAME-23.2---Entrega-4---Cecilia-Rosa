import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/i/i.service';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService){}
  create(createCategoriaDto: CreateCategoriaDto) {
    return this.prisma.categoria.create({data: createCategoriaDto});
  }

  findAll() {
    return this.prisma.categoria.findMany();
  }

  findOne(id: number) {
    return this.prisma.categoria.findUnique({where: {id}});
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.prisma.categoria.update({where:{id: id}, data: updateCategoriaDto});
  }

  remove(id: number) {
    this.prisma.categoria.delete({where:{id}});
    return 'A categoria foi deletada com sucesso'
  }
}
