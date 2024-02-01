import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { MesaModule } from './mesa/mesa.module';
import { PedidoModule } from './pedido/pedido.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { FuncionarioService } from './funcionario/funcionario.service';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [FuncionarioModule, ProdutoModule, CategoriaModule, MesaModule, PedidoModule, RelatorioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthService, FuncionarioService, LocalStrategy, JwtService],
})
export class AppModule {}
