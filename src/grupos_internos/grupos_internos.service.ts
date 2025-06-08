import { Injectable } from '@nestjs/common';
import { CreateGruposInternoDto } from './dto/create-grupos_interno.dto';
import { UpdateGruposInternoDto } from './dto/update-grupos_interno.dto';

@Injectable()
export class GruposInternosService {
  create(createGruposInternoDto: CreateGruposInternoDto) {
    return 'This action adds a new gruposInterno';
  }

  findAll() {
    return `This action returns all gruposInternos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gruposInterno`;
  }

  update(id: number, updateGruposInternoDto: UpdateGruposInternoDto) {
    return `This action updates a #${id} gruposInterno`;
  }

  remove(id: number) {
    return `This action removes a #${id} gruposInterno`;
  }
}
