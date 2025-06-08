import { Injectable } from '@nestjs/common';
import { CreateGruposExternoDto } from './dto/create-grupos_externo.dto';
import { UpdateGruposExternoDto } from './dto/update-grupos_externo.dto';

@Injectable()
export class GruposExternosService {
  create(createGruposExternoDto: CreateGruposExternoDto) {
    return 'This action adds a new gruposExterno';
  }

  findAll() {
    return `This action returns all gruposExternos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gruposExterno`;
  }

  update(id: number, updateGruposExternoDto: UpdateGruposExternoDto) {
    return `This action updates a #${id} gruposExterno`;
  }

  remove(id: number) {
    return `This action removes a #${id} gruposExterno`;
  }
}
