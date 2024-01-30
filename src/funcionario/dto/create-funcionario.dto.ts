import { IsEmail, IsNumberString } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';


export class CreateFuncionarioDto {

    nome: string;

    @IsEmail()
    email: string;

    @IsNumberString()
    cpf: number;

    @IsNumberString()
    telefone: number;

    @IsNumberString()
    vendas: number;

    @CreateDateColumn({ name: 'data_cadastro' })
    data_cadastro: Date;

    senha: string;
}
