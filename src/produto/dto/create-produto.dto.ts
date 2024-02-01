import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProdutoDto {

    @IsNotEmpty()
    @IsNumber()
    preco: number;

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    disponibilidade: string;

    @IsNotEmpty()
    @IsNumber()
    vendidos: number;

    @IsNotEmpty()
    @IsNumber()
    categoriaId: number;
}
