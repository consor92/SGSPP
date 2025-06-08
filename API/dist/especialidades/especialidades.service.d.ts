import { Repository } from 'typeorm';
import { Especialidad } from './entities/especialidade.entity';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
import { EspecialidadResponseDto } from './dto/response-especialidad.dto';
export declare class EspecialidadService {
    private especialidadRepository;
    constructor(especialidadRepository: Repository<Especialidad>);
    create(createEspecialidadDto: CreateEspecialidadDto): Promise<EspecialidadResponseDto>;
    findAll(): Promise<EspecialidadResponseDto[]>;
    findOne(id: number): Promise<EspecialidadResponseDto>;
    update(id: number, updateEspecialidadDto: UpdateEspecialidadDto): Promise<EspecialidadResponseDto>;
    remove(id: number): Promise<void>;
    private toResponseDto;
}
