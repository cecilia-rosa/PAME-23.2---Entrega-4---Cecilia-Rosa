import { IsEmail, IsNumberString } from "class-validator"; //para garantir formatos
import { CreateDateColumn } from 'typeorm'; //para automatizar a data



export class CreateFuncionarioDto {

    nome: string;

    @IsEmail()//confere se vai receber um email
    email: string;

    @IsNumberString() //confere se eh string de numero, string para zero a esquerda nao ser excluido
    cpf: string;

    telefone: number;

    vendas: number;

    @CreateDateColumn({ name: 'data_cadastro' }) //data automaticamente a do dia da criacao do usuario
    data_cadastro: Date;

    senha: string;
}
