import { Injectable } from '@nestjs/common';
import { CreateTerminalidadDto } from './dto/create-terminalidad.dto';
import { UpdateTerminalidadDto } from './dto/update-terminalidad.dto';

@Injectable()
export class TerminalidadService {
  create(createTerminalidadDto: CreateTerminalidadDto) {
    return 'This action adds a new terminalidad';
  }

  findAll() {
    return `This action returns all terminalidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} terminalidad`;
  }

  update(id: number, updateTerminalidadDto: UpdateTerminalidadDto) {
    return `This action updates a #${id} terminalidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} terminalidad`;
  }
}
