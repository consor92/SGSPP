"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./entities/role.entity");
const usuario_entity_1 = require("../usuarios/entities/usuario.entity");
const curso_entity_1 = require("../cursos/entities/curso.entity");
let RolService = class RolService {
    constructor(rolRepository, usuarioRepository, cursoRepository) {
        this.rolRepository = rolRepository;
        this.usuarioRepository = usuarioRepository;
        this.cursoRepository = cursoRepository;
    }
    async create(createRolDto) {
        const usuario = await this.usuarioRepository.findOne({ where: { id: createRolDto.usuario } });
        const curso = await this.cursoRepository.findOne({ where: { id: createRolDto.curso } });
        if (!usuario || !curso) {
            throw new Error('Usuario o Curso no encontrado');
        }
        const rol = this.rolRepository.create({
            ...createRolDto,
            usuario: usuario,
            curso: curso,
        });
        await this.rolRepository.save(rol);
        return this.findOne(rol.id);
    }
    async findAll() {
        const roles = await this.rolRepository.find({ relations: ['usuario', 'curso'] });
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
    async findOne(id) {
        const rol = await this.rolRepository.findOne({
            where: { id },
            relations: ['usuario', 'curso'],
        });
        if (!rol) {
            throw new common_1.NotFoundException(`Rol con ID ${id} no encontrado.`);
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
    async update(id, updateRolDto) {
        await this.rolRepository.update(id, updateRolDto);
        return this.findOne(id);
    }
    async remove(id) {
        await this.rolRepository.delete(id);
    }
};
exports.RolService = RolService;
exports.RolService = RolService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Rol)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.Usuario)),
    __param(2, (0, typeorm_1.InjectRepository)(curso_entity_1.Curso)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], RolService);
//# sourceMappingURL=roles.service.js.map