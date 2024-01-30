import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/i/i.service';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prisma: PrismaService){}
  create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.prisma.funcionario.create({data: createFuncionarioDto});
  }

  findAll() {
    return `This action returns all funcionario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} funcionario`;
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return `This action updates a #${id} funcionario`;
  }

  remove(id: number) {
    return `This action removes a #${id} funcionario`;
  }
}
