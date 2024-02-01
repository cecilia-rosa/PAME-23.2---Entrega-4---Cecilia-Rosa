import { PartialType } from '@nestjs/mapped-types';
import { CreateRelatorioDto } from './create-relatorio.dto';
import { IsNotEmpty, IsNumber} from "class-validator";

export class UpdateRelatorioDto extends PartialType(CreateRelatorioDto) {

    @IsNotEmpty()
    @IsNumber()
    total_pedidos: number;

    @IsNotEmpty()
    @IsNumber()
    receita: number;
}
