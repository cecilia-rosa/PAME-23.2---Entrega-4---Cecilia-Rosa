
import { CreateDateColumn } from 'typeorm'; //para automatizar a data
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePedidoDto {

    @IsNotEmpty()
    @IsString()
    nome_cliente: string;

    @IsNotEmpty()
    @IsNumber()
    mesaId: number;

    @CreateDateColumn({ name: 'data' })
    data: Date;

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
