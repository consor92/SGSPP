import { UsuariosGruposInternosService } from './usuarios_grupos_internos.service';
import { CreateUsuariosGruposInternoDto } from './dto/create-usuarios_grupos_interno.dto';
import { UpdateUsuariosGruposInternoDto } from './dto/update-usuarios_grupos_interno.dto';
export declare class UsuariosGruposInternosController {
    private readonly usuariosGruposInternosService;
    constructor(usuariosGruposInternosService: UsuariosGruposInternosService);
    create(createUsuariosGruposInternoDto: CreateUsuariosGruposInternoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUsuariosGruposInternoDto: UpdateUsuariosGruposInternoDto): string;
    remove(id: string): string;
}
