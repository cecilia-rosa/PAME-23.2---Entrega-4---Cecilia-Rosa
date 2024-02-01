import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMesaDto {
    @IsNotEmpty()
    @IsNumber()
    pessoas: number;

    @IsNotEmpty()
    @IsNumber()
    funcionarioId: number;

    @IsNotEmpty()
    @IsString()
    status: string;
}
