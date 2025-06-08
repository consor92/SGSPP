import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './entities/role.entity';
import { CreateRolDto } from './dto/create-role.dto';
import { UpdateRolDto } from './dto/update-role.dto';
import { RolResponseDto } from './dto/response-role.dto'; // Importa el DTO de respuesta
import { Usuario } from '../usuarios/entities/usuario.entity'; // Asegúrate de importar la entidad de Usuario
import { Curso } from '../cursos/entities/curso.entity'; // Asegúrate de importar la entidad de Curso

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,  // Inyecta el repositorio de Usuario
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) { }

  async create(createRolDto: CreateRolDto): Promise<RolResponseDto> {
    // Buscar las entidades de usuario y curso usando los IDs
    const usuario = await this.usuarioRepository.findOne({ where: { id: createRolDto.usuario } });
    const curso = await this.cursoRepository.findOne({ where: { id: createRolDto.curso } });

    if (!usuario || !curso) {
      throw new Error('Usuario o Curso no encontrado');
    }

    // Crear el rol y asignar las entidades de usuario y curso
    const rol = this.rolRepository.create({
      ...createRolDto,
      usuario: usuario, // Aquí le pasas la entidad completa
      curso: curso, // Aquí también
    });

    await this.rolRepository.save(rol);

    // Devuelve el DTO de respuesta
    return this.findOne(rol.id);
  }

  async findAll(): Promise<RolResponseDto[]> {
    const roles = await this.rolRepository.find({ relations: ['usuario', 'curso'] });

    // Mapea los resultados a RolResponseDto
    return roles.map(role => ({
      id: role.id,
      nombre: role.nombre,
      privilegios: role.privilegios,
      usuario: {
        id: role.usuario.id,
        nombre: role.usuario.nombre,
        apellido: role.usuario.apellido,
      },
      curso: {
        id: role.curso.id,
        nombre: role.curso.nombre,
        ciclo_lectivo: role.curso.ciclo_lectivo,
        codigo_matriculacion: role.curso.codigo_matriculacion,
      },
    }));
  }

  async findOne(id: number): Promise<RolResponseDto> {
    const rol = await this.rolRepository.findOne({
      where: { id }, // Filtra por ID
      relations: ['usuario', 'curso'], // Incluye relaciones
    });

    if (!rol) {
      throw new NotFoundException(`Rol con ID ${id} no encontrado.`);
    }

    return {
      id: rol.id,
      privilegios: rol.privilegios,
      usuario: {
        id: rol.usuario.id,
        nombre: rol.usuario.nombre,
        apellido: rol.usuario.apellido,
      },
      curso: {
        id: rol.curso.id,
        nombre: rol.curso.nombre,
        ciclo_lectivo: rol.curso.ciclo_lectivo,
        codigo_matriculacion: rol.curso.codigo_matriculacion,
      },
    };
  }

  async update(id: number, updateRolDto: UpdateRolDto): Promise<RolResponseDto> {
    await this.rolRepository.update(id, updateRolDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.rolRepository.delete(id);
  }
}
