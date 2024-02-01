import { IsNotEmpty, IsNumber} from "class-validator";

export class CreateRelatorioDto {

    @IsNotEmpty()
    @IsNumber()
    total_pedidos: number;

    @IsNotEmpty()
    @IsNumber()
    receita: number;
}
