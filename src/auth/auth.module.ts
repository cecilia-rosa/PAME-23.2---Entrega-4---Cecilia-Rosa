import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { FuncionarioService } from '../funcionario/funcionario.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, FuncionarioService]
})
export class AuthModule{}