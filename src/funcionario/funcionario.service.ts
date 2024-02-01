import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class FuncionarioService {
  constructor(private readonly prisma: PrismaService){}
  async create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.prisma.funcionario.create({
      data: ...createFuncionarioDto,
      senha: await bcrypt.hash.(createFuncionarioDto.senha, 10)
      
    });
  }

  findAll() {
    return this.prisma.funcionario.findMany();
  }

  findOne(id: number) {
    return this.prisma.funcionario.findUnique({where: {id}});
  }

  findByEmail(email:string){
    return this.prisma.funcionario.findUnique({where: {email: email}})
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.prisma.funcionario.update({where: {id: id}, data: updateFuncionarioDto});
  }

  remove(id: number) {
    this.prisma.funcionario.delete({where:{id}})
    return 'O usuário foi deletado com sucesso';
  }
}
