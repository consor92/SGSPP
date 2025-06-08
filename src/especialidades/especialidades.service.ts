import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Especialidad } from './entities/especialidade.entity';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
import { EspecialidadResponseDto } from './dto/response-especialidad.dto';

@Injectable()
export class EspecialidadService {
    constructor(
        @InjectRepository(Especialidad)
        private especialidadRepository: Repository<Especialidad>,
    ) {}

    async create(createEspecialidadDto: CreateEspecialidadDto): Promise<EspecialidadResponseDto> {
        const especialidad = this.especialidadRepository.create(createEspecialidadDto);
        const savedEspecialidad = await this.especialidadRepository.save(especialidad);
        return this.toResponseDto(savedEspecialidad);
    }

    async findAll(): Promise<EspecialidadResponseDto[]> {
        const especialidades = await this.especialidadRepository.find();
        return especialidades.map(this.toResponseDto);
    }

    async findOne(id: number): Promise<EspecialidadResponseDto> {
        const especialidad = await this.especialidadRepository.findOneBy({ id });
        return this.toResponseDto(especialidad);
    }

    async update(id: number, updateEspecialidadDto: UpdateEspecialidadDto): Promise<EspecialidadResponseDto> {
        await this.especialidadRepository.update(id, updateEspecialidadDto);
        const updatedEspecialidad = await this.findOne(id);
        return updatedEspecialidad;
    }

    async remove(id: number): Promise<void> {
        await this.especialidadRepository.delete(id);
    }

    private toResponseDto(especialidad: Especialidad): EspecialidadResponseDto {
        return {
            id: especialidad.id,
            nombre: especialidad.nombre,
        };
    }
}
