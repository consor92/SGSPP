import { AsignaturasService } from './asignaturas.service';
import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
export declare class AsignaturasController {
    private readonly asignaturasService;
    constructor(asignaturasService: AsignaturasService);
    create(createAsignaturaDto: CreateAsignaturaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAsignaturaDto: UpdateAsignaturaDto): string;
    remove(id: string): string;
}
