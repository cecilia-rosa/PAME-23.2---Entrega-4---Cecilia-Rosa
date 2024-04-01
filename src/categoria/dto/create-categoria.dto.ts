import { IsNotEmpty, IsString } from "class-validator";

//testando github codespace

export class CreateCategoriaDto {

    @IsNotEmpty() //confere se o campo nao ta vazio
    @IsString() //confere se eh string
    nome: string;
    
}
