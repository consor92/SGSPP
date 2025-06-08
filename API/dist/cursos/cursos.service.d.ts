import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { CursoResponseDto } from './dto/response-curso.dto';
export declare class CursoService {
    private cursoRepository;
    constructor(cursoRepository: Repository<Curso>);
    create(createCursoDto: CreateCursoDto): Promise<CursoResponseDto>;
    findAll(): Promise<CursoResponseDto[]>;
    findOne(id: number): Promise<CursoResponseDto>;
    update(id: number, updateCursoDto: UpdateCursoDto): Promise<CursoResponseDto>;
    remove(id: number): Promise<void>;
    private toResponseDto;
}
