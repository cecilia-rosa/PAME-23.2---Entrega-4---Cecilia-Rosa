import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FuncionarioService } from 'src/funcionario/funcionario.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma:PrismaService,
        private readonly funcionarioService: FuncionarioService){}

    async validateUser(email,senha){
        const funcionario = await this.funcionarioService.findByEmail(email)

        if(!funcionario || funcionario.senha != senha){
            throw new Error('Credenciais invalidas')
        }

        return {...funcionario , senha:undefined}
    }
}
