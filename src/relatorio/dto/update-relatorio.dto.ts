import { PartialType } from '@nestjs/mapped-types';
import { CreateRelatorioDto } from './create-relatorio.dto';
import { IsNotEmpty, IsNumber} from "class-validator";

export class UpdateRelatorioDto extends PartialType(CreateRelatorioDto) {

    @IsNotEmpty()
    @IsNumber()
    total_pedidos: number; //deve ser automaticamente somado quando os pedidos sao feitos

    @IsNotEmpty()
    @IsNumber()
    receita: number; //soma dos valores de cada pedido, tambem ainda a ser implementado
}
