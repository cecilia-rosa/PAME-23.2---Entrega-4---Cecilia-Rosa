import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class JwtAuthGuard extends AuthGuard('jwt'){
    canActivate(context: ExecutionContext) {
        //todo guard possui uma funcao canActivate que diz se pode acessar a rota
        return super.canActivate(context)       
    }
}