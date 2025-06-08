import { CreateCalificacioneDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';
export declare class CalificacionesService {
    create(createCalificacioneDto: CreateCalificacioneDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCalificacioneDto: UpdateCalificacioneDto): string;
    remove(id: number): string;
}
