import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormatosPpService } from './formatos_pp.service';
import { CreateFormatosPpDto } from './dto/create-formatos_pp.dto';
import { UpdateFormatosPpDto } from './dto/update-formatos_pp.dto';

@Controller('formatos-pp')
export class FormatosPpController {
  constructor(private readonly formatosPpService: FormatosPpService) {}

  @Post()
  create(@Body() createFormatosPpDto: CreateFormatosPpDto) {
    return this.formatosPpService.create(createFormatosPpDto);
  }

  @Get()
  findAll() {
    return this.formatosPpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formatosPpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormatosPpDto: UpdateFormatosPpDto) {
    return this.formatosPpService.update(+id, updateFormatosPpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formatosPpService.remove(+id);
  }
}
