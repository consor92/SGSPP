import { CreateGruposExternoDto } from './dto/create-grupos_externo.dto';
import { UpdateGruposExternoDto } from './dto/update-grupos_externo.dto';
export declare class GruposExternosService {
    create(createGruposExternoDto: CreateGruposExternoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGruposExternoDto: UpdateGruposExternoDto): string;
    remove(id: number): string;
}
