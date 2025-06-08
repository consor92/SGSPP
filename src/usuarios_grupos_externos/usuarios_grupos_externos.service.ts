import { Injectable } from '@nestjs/common';
import { CreateUsuariosGruposExternoDto } from './dto/create-usuarios_grupos_externo.dto';
import { UpdateUsuariosGruposExternoDto } from './dto/update-usuarios_grupos_externo.dto';

@Injectable()
export class UsuariosGruposExternosService {
  create(createUsuariosGruposExternoDto: CreateUsuariosGruposExternoDto) {
    return 'This action adds a new usuariosGruposExterno';
  }

  findAll() {
    return `This action returns all usuariosGruposExternos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuariosGruposExterno`;
  }

  update(id: number, updateUsuariosGruposExternoDto: UpdateUsuariosGruposExternoDto) {
    return `This action updates a #${id} usuariosGruposExterno`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuariosGruposExterno`;
  }
}
