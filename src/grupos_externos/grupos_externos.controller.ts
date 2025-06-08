import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GruposExternosService } from './grupos_externos.service';
import { CreateGruposExternoDto } from './dto/create-grupos_externo.dto';
import { UpdateGruposExternoDto } from './dto/update-grupos_externo.dto';

@Controller('grupos-externos')
export class GruposExternosController {
  constructor(private readonly gruposExternosService: GruposExternosService) {}

  @Post()
  create(@Body() createGruposExternoDto: CreateGruposExternoDto) {
    return this.gruposExternosService.create(createGruposExternoDto);
  }

  @Get()
  findAll() {
    return this.gruposExternosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gruposExternosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGruposExternoDto: UpdateGruposExternoDto) {
    return this.gruposExternosService.update(+id, updateGruposExternoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gruposExternosService.remove(+id);
  }
}
