import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/i/i.service';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService){}
  create(createPedidoDto: CreatePedidoDto) {
    return this.prisma.pedido.create({data: createPedidoDto});
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedido.findUnique({where: {id}});
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.prisma.pedido.update({where:{id: id}, data: updatePedidoDto});
  }

  remove(id: number) {
    this.prisma.pedido.delete({where:{id}});
    return 'O pedido foi deletado com sucesso'
  }
}
