import { CreateGruposInternoDto } from './dto/create-grupos_interno.dto';
import { UpdateGruposInternoDto } from './dto/update-grupos_interno.dto';
export declare class GruposInternosService {
    create(createGruposInternoDto: CreateGruposInternoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateGruposInternoDto: UpdateGruposInternoDto): string;
    remove(id: number): string;
}
