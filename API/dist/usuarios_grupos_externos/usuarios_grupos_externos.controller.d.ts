import { UsuariosGruposExternosService } from './usuarios_grupos_externos.service';
import { CreateUsuariosGruposExternoDto } from './dto/create-usuarios_grupos_externo.dto';
import { UpdateUsuariosGruposExternoDto } from './dto/update-usuarios_grupos_externo.dto';
export declare class UsuariosGruposExternosController {
    private readonly usuariosGruposExternosService;
    constructor(usuariosGruposExternosService: UsuariosGruposExternosService);
    create(createUsuariosGruposExternoDto: CreateUsuariosGruposExternoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUsuariosGruposExternoDto: UpdateUsuariosGruposExternoDto): string;
    remove(id: string): string;
}
