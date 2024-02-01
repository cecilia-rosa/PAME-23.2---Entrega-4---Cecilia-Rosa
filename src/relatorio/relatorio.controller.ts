import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';
import { CreateRelatorioDto } from './dto/create-relatorio.dto';
import { UpdateRelatorioDto } from './dto/update-relatorio.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';

@Controller('relatorio')
export class RelatorioController {
  constructor(private readonly relatorioService: RelatorioService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  acessoRestrito(@Request() req) {
    const funcionario = req.funcionario; // Objeto do funcionário obtido do token JWT
    if (funcionario.id != 1) {
      throw new Error('Acesso não autorizado');
    } 
  }
  create(@Body() createRelatorioDto: CreateRelatorioDto) {
    return this.relatorioService.create(createRelatorioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.relatorioService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.relatorioService.findOne(+id);
  }


  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  AcessoRestrito(@Request() req) {
    const funcionario = req.funcionario; // Objeto do funcionário obtido do token JWT
    if (funcionario.id != 1) {
      throw new Error('Acesso não autorizado');
    } 
  }
  update(@Param('id') id: string, @Body() updateRelatorioDto: UpdateRelatorioDto) {
    return this.relatorioService.update(+id, updateRelatorioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  acessorestrito(@Request() req) {
    const funcionario = req.funcionario; // Objeto do funcionário obtido do token JWT
    if (funcionario.id != 1) {
      throw new Error('Acesso não autorizado');
    } 
  }
  remove(@Param('id') id: string) {
    return this.relatorioService.remove(+id);
  }
}
