import { CreateUsuariosGruposInternoDto } from './dto/create-usuarios_grupos_interno.dto';
import { UpdateUsuariosGruposInternoDto } from './dto/update-usuarios_grupos_interno.dto';
export declare class UsuariosGruposInternosService {
    create(createUsuariosGruposInternoDto: CreateUsuariosGruposInternoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUsuariosGruposInternoDto: UpdateUsuariosGruposInternoDto): string;
    remove(id: number): string;
}
