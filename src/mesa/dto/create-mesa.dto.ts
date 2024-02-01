import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMesaDto {
    @IsNotEmpty()
    @IsNumber()
    pessoas: number;

    @IsNotEmpty()
    @IsNumber()
    funcionarioId: number; //ideia eh ser automatizado id do funcionario logado, a ser implementado ainda

    @IsNotEmpty()
    @IsString()
    status: string;
}
