import { Repository } from 'typeorm';
import { Rol } from './entities/role.entity';
import { CreateRolDto } from './dto/create-role.dto';
import { UpdateRolDto } from './dto/update-role.dto';
import { RolResponseDto } from './dto/response-role.dto';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { Curso } from '../cursos/entities/curso.entity';
export declare class RolService {
    private readonly rolRepository;
    private readonly usuarioRepository;
    private readonly cursoRepository;
    constructor(rolRepository: Repository<Rol>, usuarioRepository: Repository<Usuario>, cursoRepository: Repository<Curso>);
    create(createRolDto: CreateRolDto): Promise<RolResponseDto>;
    findAll(): Promise<RolResponseDto[]>;
    findOne(id: number): Promise<RolResponseDto>;
    update(id: number, updateRolDto: UpdateRolDto): Promise<RolResponseDto>;
    remove(id: number): Promise<void>;
}
