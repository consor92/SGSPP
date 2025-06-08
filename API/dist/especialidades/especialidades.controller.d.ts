import { EspecialidadService } from './especialidades.service';
import { CreateEspecialidadDto } from './dto/create-especialidad.dto';
import { UpdateEspecialidadDto } from './dto/update-especialidad.dto';
import { EspecialidadResponseDto } from './dto/response-especialidad.dto';
export declare class EspecialidadController {
    private readonly especialidadService;
    constructor(especialidadService: EspecialidadService);
    create(createEspecialidadDto: CreateEspecialidadDto): Promise<EspecialidadResponseDto>;
    findAll(): Promise<EspecialidadResponseDto[]>;
    findOne(id: number): Promise<EspecialidadResponseDto>;
    update(id: number, updateEspecialidadDto: UpdateEspecialidadDto): Promise<EspecialidadResponseDto>;
    remove(id: number): Promise<void>;
}
