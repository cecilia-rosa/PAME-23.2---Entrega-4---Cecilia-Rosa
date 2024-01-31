
import { CreateDateColumn } from 'typeorm'; //para automatizar a data

export class CreatePedidoDto {
    
    nome_cliente: string;
    mesaId: number;
    @CreateDateColumn({ name: 'data' })
    data: Date;
    valor_total: number;
    funcionarioId: number;
    relatorioId: number;
}
