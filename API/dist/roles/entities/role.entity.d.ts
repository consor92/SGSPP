import { Usuario } from '../../usuarios/entities/usuario.entity';
import { Curso } from '../../cursos/entities/curso.entity';
export declare class Rol {
    id: number;
    nombre: string;
    privilegios: number;
    usuario: Usuario;
    curso: Curso;
    deletedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
