import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosGruposInternosService } from './usuarios_grupos_internos.service';
import { CreateUsuariosGruposInternoDto } from './dto/create-usuarios_grupos_interno.dto';
import { UpdateUsuariosGruposInternoDto } from './dto/update-usuarios_grupos_interno.dto';

@Controller('usuarios-grupos-internos')
export class UsuariosGruposInternosController {
  constructor(private readonly usuariosGruposInternosService: UsuariosGruposInternosService) {}

  @Post()
  create(@Body() createUsuariosGruposInternoDto: CreateUsuariosGruposInternoDto) {
    return this.usuariosGruposInternosService.create(createUsuariosGruposInternoDto);
  }

  @Get()
  findAll() {
    return this.usuariosGruposInternosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosGruposInternosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosGruposInternoDto: UpdateUsuariosGruposInternoDto) {
    return this.usuariosGruposInternosService.update(+id, updateUsuariosGruposInternoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosGruposInternosService.remove(+id);
  }
}
