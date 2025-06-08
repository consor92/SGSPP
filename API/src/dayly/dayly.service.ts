import { Injectable } from '@nestjs/common';
import { CreateDaylyDto } from './dto/create-dayly.dto';
import { UpdateDaylyDto } from './dto/update-dayly.dto';

@Injectable()
export class DaylyService {
  create(createDaylyDto: CreateDaylyDto) {
    return 'This action adds a new dayly';
  }

  findAll() {
    return `This action returns all dayly`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dayly`;
  }

  update(id: number, updateDaylyDto: UpdateDaylyDto) {
    return `This action updates a #${id} dayly`;
  }

  remove(id: number) {
    return `This action removes a #${id} dayly`;
  }
}
