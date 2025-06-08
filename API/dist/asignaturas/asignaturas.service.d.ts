import { CreateAsignaturaDto } from './dto/create-asignatura.dto';
import { UpdateAsignaturaDto } from './dto/update-asignatura.dto';
export declare class AsignaturasService {
    create(createAsignaturaDto: CreateAsignaturaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAsignaturaDto: UpdateAsignaturaDto): string;
    remove(id: number): string;
}
