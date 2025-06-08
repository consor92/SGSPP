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
exports.AsignaturasController = void 0;
const common_1 = require("@nestjs/common");
const asignaturas_service_1 = require("./asignaturas.service");
const create_asignatura_dto_1 = require("./dto/create-asignatura.dto");
const update_asignatura_dto_1 = require("./dto/update-asignatura.dto");
let AsignaturasController = class AsignaturasController {
    constructor(asignaturasService) {
        this.asignaturasService = asignaturasService;
    }
    create(createAsignaturaDto) {
        return this.asignaturasService.create(createAsignaturaDto);
    }
    findAll() {
        return this.asignaturasService.findAll();
    }
    findOne(id) {
        return this.asignaturasService.findOne(+id);
    }
    update(id, updateAsignaturaDto) {
        return this.asignaturasService.update(+id, updateAsignaturaDto);
    }
    remove(id) {
        return this.asignaturasService.remove(+id);
    }
};
exports.AsignaturasController = AsignaturasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_asignatura_dto_1.CreateAsignaturaDto]),
    __metadata("design:returntype", void 0)
], AsignaturasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AsignaturasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AsignaturasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_asignatura_dto_1.UpdateAsignaturaDto]),
    __metadata("design:returntype", void 0)
], AsignaturasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AsignaturasController.prototype, "remove", null);
exports.AsignaturasController = AsignaturasController = __decorate([
    (0, common_1.Controller)('asignaturas'),
    __metadata("design:paramtypes", [asignaturas_service_1.AsignaturasService])
], AsignaturasController);
//# sourceMappingURL=asignaturas.controller.js.map