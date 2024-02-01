import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
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
