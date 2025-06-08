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
exports.CursoController = void 0;
const common_1 = require("@nestjs/common");
const cursos_service_1 = require("./cursos.service");
const create_curso_dto_1 = require("./dto/create-curso.dto");
const update_curso_dto_1 = require("./dto/update-curso.dto");
const curso_list_response_dto_1 = require("./dto/curso-list-response.dto");
let CursoController = class CursoController {
    constructor(cursoService) {
        this.cursoService = cursoService;
    }
    async create(createCursoDto) {
        return this.cursoService.create(createCursoDto);
    }
    async findAll() {
        const cursos = await this.cursoService.findAll();
        return new curso_list_response_dto_1.CursoListResponseDto(cursos);
    }
    async findOne(id) {
        return this.cursoService.findOne(id);
    }
    async update(id, updateCursoDto) {
        return this.cursoService.update(id, updateCursoDto);
    }
    async remove(id) {
        return this.cursoService.remove(id);
    }
};
exports.CursoController = CursoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_curso_dto_1.CreateCursoDto]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_curso_dto_1.UpdateCursoDto]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursoController.prototype, "remove", null);
exports.CursoController = CursoController = __decorate([
    (0, common_1.Controller)('cursos'),
    __metadata("design:paramtypes", [cursos_service_1.CursoService])
], CursoController);
//# sourceMappingURL=cursos.controller.js.map