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
exports.EspecialidadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const especialidade_entity_1 = require("./entities/especialidade.entity");
let EspecialidadService = class EspecialidadService {
    constructor(especialidadRepository) {
        this.especialidadRepository = especialidadRepository;
    }
    async create(createEspecialidadDto) {
        const especialidad = this.especialidadRepository.create(createEspecialidadDto);
        const savedEspecialidad = await this.especialidadRepository.save(especialidad);
        return this.toResponseDto(savedEspecialidad);
    }
    async findAll() {
        const especialidades = await this.especialidadRepository.find();
        return especialidades.map(this.toResponseDto);
    }
    async findOne(id) {
        const especialidad = await this.especialidadRepository.findOneBy({ id });
        return this.toResponseDto(especialidad);
    }
    async update(id, updateEspecialidadDto) {
        await this.especialidadRepository.update(id, updateEspecialidadDto);
        const updatedEspecialidad = await this.findOne(id);
        return updatedEspecialidad;
    }
    async remove(id) {
        await this.especialidadRepository.delete(id);
    }
    toResponseDto(especialidad) {
        return {
            id: especialidad.id,
            nombre: especialidad.nombre,
        };
    }
};
exports.EspecialidadService = EspecialidadService;
exports.EspecialidadService = EspecialidadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(especialidade_entity_1.Especialidad)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EspecialidadService);
//# sourceMappingURL=especialidades.service.js.map