import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';

@Controller('mesa')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @UseGuards(JwtAuthGuard)
  @Post('criar')
  create(@Body() createMesaDto: CreateMesaDto) {
    return this.mesaService.create(createMesaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('todas')
  findAll() {
    return this.mesaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesaService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('atualizar/:id')
  update(@Param('id') id: string, @Body() updateMesaDto: UpdateMesaDto) {
    return this.mesaService.update(+id, updateMesaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('deletar/:id')
  remove(@Param('id') id: string) {
    return this.mesaService.remove(+id);
  }
}
