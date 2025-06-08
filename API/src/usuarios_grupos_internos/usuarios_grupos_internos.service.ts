import { Injectable } from '@nestjs/common';
import { CreateUsuariosGruposInternoDto } from './dto/create-usuarios_grupos_interno.dto';
import { UpdateUsuariosGruposInternoDto } from './dto/update-usuarios_grupos_interno.dto';

@Injectable()
export class UsuariosGruposInternosService {
  create(createUsuariosGruposInternoDto: CreateUsuariosGruposInternoDto) {
    return 'This action adds a new usuariosGruposInterno';
  }

  findAll() {
    return `This action returns all usuariosGruposInternos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuariosGruposInterno`;
  }

  update(id: number, updateUsuariosGruposInternoDto: UpdateUsuariosGruposInternoDto) {
    return `This action updates a #${id} usuariosGruposInterno`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuariosGruposInterno`;
  }
}
