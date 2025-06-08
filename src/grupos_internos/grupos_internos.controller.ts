import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GruposInternosService } from './grupos_internos.service';
import { CreateGruposInternoDto } from './dto/create-grupos_interno.dto';
import { UpdateGruposInternoDto } from './dto/update-grupos_interno.dto';

@Controller('grupos-internos')
export class GruposInternosController {
  constructor(private readonly gruposInternosService: GruposInternosService) {}

  @Post()
  create(@Body() createGruposInternoDto: CreateGruposInternoDto) {
    return this.gruposInternosService.create(createGruposInternoDto);
  }

  @Get()
  findAll() {
    return this.gruposInternosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gruposInternosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGruposInternoDto: UpdateGruposInternoDto) {
    return this.gruposInternosService.update(+id, updateGruposInternoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gruposInternosService.remove(+id);
  }
}
