import { CursoService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { CursoResponseDto } from './dto/response-curso.dto';
import { CursoListResponseDto } from './dto/curso-list-response.dto';
export declare class CursoController {
    private readonly cursoService;
    constructor(cursoService: CursoService);
    create(createCursoDto: CreateCursoDto): Promise<CursoResponseDto>;
    findAll(): Promise<CursoListResponseDto>;
    findOne(id: number): Promise<CursoResponseDto>;
    update(id: number, updateCursoDto: UpdateCursoDto): Promise<CursoResponseDto>;
    remove(id: number): Promise<void>;
}
