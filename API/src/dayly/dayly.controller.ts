import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaylyService } from './dayly.service';
import { CreateDaylyDto } from './dto/create-dayly.dto';
import { UpdateDaylyDto } from './dto/update-dayly.dto';

@Controller('dayly')
export class DaylyController {
  constructor(private readonly daylyService: DaylyService) {}

  @Post()
  create(@Body() createDaylyDto: CreateDaylyDto) {
    return this.daylyService.create(createDaylyDto);
  }

  @Get()
  findAll() {
    return this.daylyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.daylyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaylyDto: UpdateDaylyDto) {
    return this.daylyService.update(+id, updateDaylyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daylyService.remove(+id);
  }
}
