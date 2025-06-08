import { GruposExternosService } from './grupos_externos.service';
import { CreateGruposExternoDto } from './dto/create-grupos_externo.dto';
import { UpdateGruposExternoDto } from './dto/update-grupos_externo.dto';
export declare class GruposExternosController {
    private readonly gruposExternosService;
    constructor(gruposExternosService: GruposExternosService);
    create(createGruposExternoDto: CreateGruposExternoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateGruposExternoDto: UpdateGruposExternoDto): string;
    remove(id: string): string;
}
