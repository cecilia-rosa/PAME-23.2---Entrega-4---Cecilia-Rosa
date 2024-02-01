import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { FuncionarioService } from 'src/funcionario/funcionario.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma:PrismaService,
        private readonly funcionarioService: FuncionarioService,
        private readonly jwtService: JwtService,
        ){}

    async validateUser(email,senha){
        const funcionario = await this.funcionarioService.findByEmail(email)

        if(!funcionario || (bcrypt.compare(funcionario.senha, senha))){
            throw new Error('Credenciais invalidas')
        }

        return {...funcionario, senha:undefined}
    }

    login(funcionario){
        const payload = { id: funcionario.id, email: funcionario.email}
        const jwtToken = this.jwtService.sign(payload, {secret: process.env.JWT_SECRET, expiresIn: '1d'})
        return {
            access_token: jwtToken
        }
    }
}
