import { IsNotEmpty, IsNumber} from "class-validator";

export class CreateRelatorioDto {

    @IsNotEmpty()
    @IsNumber()
    total_pedidos: number = 0; //deve ser automaticamente somado quando os pedidos sao feitos, começa em 0

    @IsNotEmpty()
    @IsNumber()
    receita: number = 0; //soma dos valores de cada pedido, tambem ainda a ser implementado, começa em 0
}
