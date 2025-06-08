import { Injectable } from '@nestjs/common';
import { CreateFormatosPpDto } from './dto/create-formatos_pp.dto';
import { UpdateFormatosPpDto } from './dto/update-formatos_pp.dto';

@Injectable()
export class FormatosPpService {
  create(createFormatosPpDto: CreateFormatosPpDto) {
    return 'This action adds a new formatosPp';
  }

  findAll() {
    return `This action returns all formatosPp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formatosPp`;
  }

  update(id: number, updateFormatosPpDto: UpdateFormatosPpDto) {
    return `This action updates a #${id} formatosPp`;
  }

  remove(id: number) {
    return `This action removes a #${id} formatosPp`;
  }
}
