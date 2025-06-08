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
exports.CalificacionesController = void 0;
const common_1 = require("@nestjs/common");
const calificaciones_service_1 = require("./calificaciones.service");
const create_calificacione_dto_1 = require("./dto/create-calificacione.dto");
const update_calificacione_dto_1 = require("./dto/update-calificacione.dto");
let CalificacionesController = class CalificacionesController {
    constructor(calificacionesService) {
        this.calificacionesService = calificacionesService;
    }
    create(createCalificacioneDto) {
        return this.calificacionesService.create(createCalificacioneDto);
    }
    findAll() {
        return this.calificacionesService.findAll();
    }
    findOne(id) {
        return this.calificacionesService.findOne(+id);
    }
    update(id, updateCalificacioneDto) {
        return this.calificacionesService.update(+id, updateCalificacioneDto);
    }
    remove(id) {
        return this.calificacionesService.remove(+id);
    }
};
exports.CalificacionesController = CalificacionesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_calificacione_dto_1.CreateCalificacioneDto]),
    __metadata("design:returntype", void 0)
], CalificacionesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CalificacionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CalificacionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_calificacione_dto_1.UpdateCalificacioneDto]),
    __metadata("design:returntype", void 0)
], CalificacionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CalificacionesController.prototype, "remove", null);
exports.CalificacionesController = CalificacionesController = __decorate([
    (0, common_1.Controller)('calificaciones'),
    __metadata("design:paramtypes", [calificaciones_service_1.CalificacionesService])
], CalificacionesController);
//# sourceMappingURL=calificaciones.controller.js.map