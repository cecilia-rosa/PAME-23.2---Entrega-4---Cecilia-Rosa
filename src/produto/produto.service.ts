import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService){}
  create(createProdutoDto: CreateProdutoDto) {
    return this.prisma.produto.create({data: createProdutoDto});
  }

  findAll() {
    return this.prisma.produto.findMany();
  }

  findOne(id: number) {
    return this.prisma.produto.findUnique({where: {id}});
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produto.update({where:{id: id}, data: updateProdutoDto});
  }

  remove(id: number) {
    this.prisma.produto.delete({where:{id}});
    return 'O produto foi deletado com sucesso'
  }
}
