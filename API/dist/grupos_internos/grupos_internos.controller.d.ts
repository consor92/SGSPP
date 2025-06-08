import { GruposInternosService } from './grupos_internos.service';
import { CreateGruposInternoDto } from './dto/create-grupos_interno.dto';
import { UpdateGruposInternoDto } from './dto/update-grupos_interno.dto';
export declare class GruposInternosController {
    private readonly gruposInternosService;
    constructor(gruposInternosService: GruposInternosService);
    create(createGruposInternoDto: CreateGruposInternoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGruposInternoDto: UpdateGruposInternoDto): string;
    remove(id: string): string;
}
