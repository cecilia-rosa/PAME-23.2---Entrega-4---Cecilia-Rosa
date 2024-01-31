import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
    preco: number;
    nome: string;
    disponibilidade: string;
    vendidos: number;
    categoriaId: number;
}
