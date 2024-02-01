import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {

    @IsNotEmpty()
    @IsString()
    nome_cliente: string;

    @IsNotEmpty()
    @IsNumber()
    mesaId: number;

    @IsNotEmpty()
    @IsNumber()
    valor_total: number;

    @IsNotEmpty()
    @IsNumber()
    funcionarioId: number;

    @IsNotEmpty()
    @IsNumber()
    relatorioId: number;

    @IsNotEmpty()
    @IsString()
    status: string;
}
