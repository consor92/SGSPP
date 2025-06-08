import { CreateUsuariosGruposExternoDto } from './dto/create-usuarios_grupos_externo.dto';
import { UpdateUsuariosGruposExternoDto } from './dto/update-usuarios_grupos_externo.dto';
export declare class UsuariosGruposExternosService {
    create(createUsuariosGruposExternoDto: CreateUsuariosGruposExternoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUsuariosGruposExternoDto: UpdateUsuariosGruposExternoDto): string;
    remove(id: number): string;
}
