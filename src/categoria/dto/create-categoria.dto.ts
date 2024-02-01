import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriaDto {

    @IsNotEmpty() //confere se o campo nao ta vazio
    @IsString() //confere se eh string
    nome: string;
    
}
