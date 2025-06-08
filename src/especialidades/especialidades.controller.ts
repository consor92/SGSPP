import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { EspecialidadService } from './especialidades.service';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
import { EspecialidadResponseDto } from './dto/response-especialidad.dto';

@Controller('especialidades')
export class EspecialidadController {
    constructor(private readonly especialidadService: EspecialidadService) {}

    @Post()
    async create(@Body() createEspecialidadDto: CreateEspecialidadDto): Promise<EspecialidadResponseDto> {
        return this.especialidadService.create(createEspecialidadDto);
    }

    @Get()
    async findAll(): Promise<EspecialidadResponseDto[]> {
        return this.especialidadService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<EspecialidadResponseDto> {
        return this.especialidadService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateEspecialidadDto: UpdateEspecialidadDto): Promise<EspecialidadResponseDto> {
        return this.especialidadService.update(id, updateEspecialidadDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.especialidadService.remove(id);
    }
}
