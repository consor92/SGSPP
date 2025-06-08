import { UsuarioService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioResponseDto } from './dto/response-usuario.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioResponseDto>;
    findAll(): Promise<UsuarioResponseDto[]>;
    findOne(id: number): Promise<UsuarioResponseDto>;
    update(id: number, updateUsuarioDto: CreateUsuarioDto): Promise<UsuarioResponseDto>;
    remove(id: number): Promise<void>;
}
