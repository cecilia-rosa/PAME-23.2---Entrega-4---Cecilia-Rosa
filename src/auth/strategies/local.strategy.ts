import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";

export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly AuthService: AuthService
    ){
        super({usernamefield: 'email', passwordfield: 'senha'})
    }

    validate(email:string, senha:string){
        return AuthService.validateUser(email, senha)
    }
}