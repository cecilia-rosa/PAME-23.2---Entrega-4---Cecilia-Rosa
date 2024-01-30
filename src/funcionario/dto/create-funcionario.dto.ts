import { IsEmail, IsNumberString } from "class-validator"; //para garantir formatos
import { CreateDateColumn } from 'typeorm'; //para automatizar a data


export class CreateFuncionarioDto {

    nome: string;

    @IsEmail()//confere se vai receber um email
    email: string;

    @IsNumberString() //confere se vai receber um numero em string
    cpf: number;

    @IsNumberString() //confere se vai receber um numero em string
    telefone: number;

    @IsNumberString() //confere se vai receber um numero em string
    vendas: number;

    @CreateDateColumn({ name: 'data_cadastro' }) //data automaticamente a do dia da criacao do usuario
    data_cadastro: Date;

    senha: string;
}
