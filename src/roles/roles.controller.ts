import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolService } from './roles.service';
import { CreateRolDto } from './dto/create-role.dto';
import { UpdateRolDto } from './dto/update-role.dto';
import { Rol } from './entities/role.entity';
import { RolResponseDto } from './dto/response-role.dto';

@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  create(@Body() createRolDto: CreateRolDto): Promise<RolResponseDto> {
    return this.rolService.create(createRolDto);
  }

  @Get()
  findAll(): Promise<RolResponseDto[]> {
    return this.rolService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<RolResponseDto> {
    return this.rolService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRolDto: UpdateRolDto): Promise<RolResponseDto> {
    return this.rolService.update(id, updateRolDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.rolService.remove(id);
  }
}
