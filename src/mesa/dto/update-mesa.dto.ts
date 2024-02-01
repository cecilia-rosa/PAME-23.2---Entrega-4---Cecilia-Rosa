import { PartialType } from '@nestjs/mapped-types';
import { CreateMesaDto } from './create-mesa.dto';
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateMesaDto extends PartialType(CreateMesaDto) {
    @IsNotEmpty()
    @IsNumber()
    pessoas: number;

    @IsNotEmpty()
    @IsString()
    status: string;
}
