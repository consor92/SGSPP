import { CalificacionesService } from './calificaciones.service';
import { CreateCalificacioneDto } from './dto/create-calificacione.dto';
import { UpdateCalificacioneDto } from './dto/update-calificacione.dto';
export declare class CalificacionesController {
    private readonly calificacionesService;
    constructor(calificacionesService: CalificacionesService);
    create(createCalificacioneDto: CreateCalificacioneDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCalificacioneDto: UpdateCalificacioneDto): string;
    remove(id: string): string;
}
