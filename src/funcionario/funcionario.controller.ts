import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';

@Controller('funcionario')
export class FuncionarioController {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Post('criar')
  create(@Body() createFuncionarioDto: CreateFuncionarioDto) {
    return this.funcionarioService.create(createFuncionarioDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('todos')
  acessoRestrito(@Request() req) {
    const funcionario = req.funcionario; // Objeto do funcionário obtido do token JWT
    if (funcionario.id != 1) {
      throw new Error('Acesso não autorizado');
    } 
  }
  findAll() {
    return this.funcionarioService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    const funcionarioId = req.funcionario.id;
    // Verifica se o ID solicitado corresponde ao ID do funcionário logado
    if (funcionarioId != +id) {
      throw new Error('Acesso não autorizado');
    }
    return this.funcionarioService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('atualizar/:id')
  update(@Param('id') id: string, @Body() updateFuncionarioDto: UpdateFuncionarioDto, @Request() req) {
    const funcionarioId = req.funcionario.id;
    if (funcionarioId != +id) {
      throw new Error('Acesso não autorizado');
    }
    return this.funcionarioService.update(+id, updateFuncionarioDto);
  }

  @UseGuards(JwtAuthGuard)
  AcessoRestrito(@Request() req) {
    const funcionario = req.funcionario; // Objeto do funcionário obtido do token JWT
    if (funcionario.id != 1) {
      throw new Error('Acesso não autorizado');
    } 
  }
  @Delete('deletar/:id')
  remove(@Param('id') id: string) {
    return this.funcionarioService.remove(+id);
  }
}
