import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidoDto } from './create-pedido.dto';

export class UpdatePedidoDto extends PartialType(CreatePedidoDto) {
    nome_cliente: string;
    mesaId: number;
    valor_total: number;
    funcionarioId: number;
    relatorioId: number;
}
