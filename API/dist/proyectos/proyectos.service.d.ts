import { CreateProyectoDto } from './dto/create-proyecto.dto';
import { UpdateProyectoDto } from './dto/update-proyecto.dto';
export declare class ProyectosService {
    create(createProyectoDto: CreateProyectoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProyectoDto: UpdateProyectoDto): string;
    remove(id: number): string;
}
