import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioDto } from './create-funcionario.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumber()
    telefone: number;

    @IsNotEmpty()
    @IsNumber()
    vendas: number;

    @IsNotEmpty()
    @IsString()
    senha: string;
}
