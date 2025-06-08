import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosGruposExternosService } from './usuarios_grupos_externos.service';
import { CreateUsuariosGruposExternoDto } from './dto/create-usuarios_grupos_externo.dto';
import { UpdateUsuariosGruposExternoDto } from './dto/update-usuarios_grupos_externo.dto';

@Controller('usuarios-grupos-externos')
export class UsuariosGruposExternosController {
  constructor(private readonly usuariosGruposExternosService: UsuariosGruposExternosService) {}

  @Post()
  create(@Body() createUsuariosGruposExternoDto: CreateUsuariosGruposExternoDto) {
    return this.usuariosGruposExternosService.create(createUsuariosGruposExternoDto);
  }

  @Get()
  findAll() {
    return this.usuariosGruposExternosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosGruposExternosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuariosGruposExternoDto: UpdateUsuariosGruposExternoDto) {
    return this.usuariosGruposExternosService.update(+id, updateUsuariosGruposExternoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosGruposExternosService.remove(+id);
  }
}
