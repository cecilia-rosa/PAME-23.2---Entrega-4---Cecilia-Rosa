import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(
        private readonly authService: AuthService
    ){
        super({usernameField: 'email', passwordField: 'senha'})
    }

    validate(email:string, senha:string){
        return this.authService.validateUser(email, senha)
    }
}