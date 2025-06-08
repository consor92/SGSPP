import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { CursoResponseDto } from './dto/response-curso.dto';

@Injectable()
export class CursoService {
    constructor(
        @InjectRepository(Curso)
        private cursoRepository: Repository<Curso>,
    ) {}

    async create(createCursoDto: CreateCursoDto): Promise<CursoResponseDto> {
        // Genera código de matriculación si no se proporciona
        const curso = this.cursoRepository.create({
            ...createCursoDto,
        });
        const savedCurso = await this.cursoRepository.save(curso);
        return this.toResponseDto(savedCurso);
    }

    async findAll(): Promise<CursoResponseDto[]> {
        const cursos = await this.cursoRepository.find();
        return cursos.map(this.toResponseDto);
    }

    async findOne(id: number): Promise<CursoResponseDto> {
        const curso = await this.cursoRepository.findOneBy({ id });
        if (!curso) {
            throw new NotFoundException(`Curso con ID ${id} no encontrado`);
        }
        return this.toResponseDto(curso);
    }

    async update(id: number, updateCursoDto: UpdateCursoDto): Promise<CursoResponseDto> {
        await this.cursoRepository.update(id, updateCursoDto);
        const updatedCurso = await this.findOne(id);
        return updatedCurso;
    }

    async remove(id: number): Promise<void> {
        const curso = await this.cursoRepository.findOneBy({ id });
        if (!curso) {
            throw new NotFoundException(`Curso con ID ${id} no encontrado`);
        }
        await this.cursoRepository.delete(id);
    }

    private toResponseDto(curso: Curso): CursoResponseDto {
        return {
            id: curso.id,
            nombre: curso.nombre,
            ciclo_lectivo: curso.ciclo_lectivo,
            codigo_matriculacion: curso.codigo_matriculacion,
            //especialidad_id: curso.especialidad?.id || null, // Asigna el id de la especialidad si existe
        };
    }

}
