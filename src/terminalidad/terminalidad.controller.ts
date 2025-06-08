import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TerminalidadService } from './terminalidad.service';
import { CreateTerminalidadDto } from './dto/create-terminalidad.dto';
import { UpdateTerminalidadDto } from './dto/update-terminalidad.dto';

@Controller('terminalidad')
export class TerminalidadController {
  constructor(private readonly terminalidadService: TerminalidadService) {}

  @Post()
  create(@Body() createTerminalidadDto: CreateTerminalidadDto) {
    return this.terminalidadService.create(createTerminalidadDto);
  }

  @Get()
  findAll() {
    return this.terminalidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.terminalidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTerminalidadDto: UpdateTerminalidadDto) {
    return this.terminalidadService.update(+id, updateTerminalidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.terminalidadService.remove(+id);
  }
}
