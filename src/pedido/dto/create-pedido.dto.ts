
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
    funcionarioId: number; //ideia eh ser automatizado com o id do funcionario logado, falta ser implementado

    @IsNotEmpty()
    @IsNumber()
    relatorioId: number; //deve ser automaticamente o ultimo relatorio criado

    @IsNotEmpty()
    @IsString()
    status: string;
}
