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

    //metodo para validar credenciais do funcionario (email e senha)
    async validateUser(email,senha){
        const funcionario = await this.funcionarioService.findByEmail(email) //busca funcionario no banco de dados pelo email

        if(!funcionario || !(bcrypt.compare(senha, funcionario.senha))){ //verifica se funcionario foi encontrado e se a senha digitada eh valida
            throw new Error('Credenciais invalidas')
        }

        return {...funcionario, senha:undefined} //retorna os dados do funcionario, exceto a senha por seguranca
    }

    //metodo para gerar um token JWT apos autenticacao bem sucedida
    login(funcionario){
        const payload = { id: funcionario.id, email: funcionario.email} //payload com informacoes do funcionario que serao incluidas no token
        const jwtToken = this.jwtService.sign(payload, {secret: process.env.JWT_SECRET, expiresIn: '1d'}) //gera token jwt
        return {
            access_token: jwtToken //retorna token
        }
    }
}
