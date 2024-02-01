import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class LocalAuthGuard extends AuthGuard('local'){
    canActivate(context: ExecutionContext) {
        //todo guard possui uma funcao canActivate que diz se pode acessar a rota
        return super.canActivate(context)       
    }
}