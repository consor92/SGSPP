import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CursoService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { CursoResponseDto } from './dto/response-curso.dto';
import { CursoListResponseDto } from './dto/curso-list-response.dto';

@Controller('cursos')
export class CursoController {
    constructor(private readonly cursoService: CursoService) {}

    @Post()
    async create(@Body() createCursoDto: CreateCursoDto): Promise<CursoResponseDto> {
        return this.cursoService.create(createCursoDto);
    }

    @Get()
    async findAll(): Promise<CursoListResponseDto> { // Cambia aquí el tipo de retorno
        const cursos = await this.cursoService.findAll();
        return new CursoListResponseDto(cursos);
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<CursoResponseDto> {
        return this.cursoService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateCursoDto: UpdateCursoDto): Promise<CursoResponseDto> {
        return this.cursoService.update(id, updateCursoDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.cursoService.remove(id);
    }
}
