import { IsEmail, IsNotEmpty, IsNumber, IsNumberString, IsString } from "class-validator"; //para garantir formatos



export class CreateFuncionarioDto {

    @IsNotEmpty()//confere se campo nao ta vazio
    @IsString() //confere se vai receber string
    nome: string;

    @IsNotEmpty()
    @IsEmail()//confere se vai receber um email
    email: string;

    @IsNotEmpty()
    @IsNumberString() //confere se eh string de numero, string para zero a esquerda nao ser excluido
    cpf: string;

    @IsNotEmpty()
    @IsNumber() //confere se vai receber um numero
    telefone: number;

    @IsNotEmpty()
    @IsNumber()
    vendas: number;

    data_cadastro: Date;

    @IsNotEmpty()
    @IsString()
    senha: string;
}
