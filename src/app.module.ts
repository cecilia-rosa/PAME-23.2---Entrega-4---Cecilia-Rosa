import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IService } from './prisma/i/i.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { MesaModule } from './mesa/mesa.module';
import { PedidoModule } from './pedido/pedido.module';
import { RelatorioModule } from './relatorio/relatorio.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [FuncionarioModule, ProdutoModule, CategoriaModule, MesaModule, PedidoModule, RelatorioModule],
  controllers: [AppController],
  providers: [AppService, IService, PrismaService],
})
export class AppModule {}
