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
exports.GruposExternosController = void 0;
const common_1 = require("@nestjs/common");
const grupos_externos_service_1 = require("./grupos_externos.service");
const create_grupos_externo_dto_1 = require("./dto/create-grupos_externo.dto");
const update_grupos_externo_dto_1 = require("./dto/update-grupos_externo.dto");
let GruposExternosController = class GruposExternosController {
    constructor(gruposExternosService) {
        this.gruposExternosService = gruposExternosService;
    }
    create(createGruposExternoDto) {
        return this.gruposExternosService.create(createGruposExternoDto);
    }
    findAll() {
        return this.gruposExternosService.findAll();
    }
    findOne(id) {
        return this.gruposExternosService.findOne(+id);
    }
    update(id, updateGruposExternoDto) {
        return this.gruposExternosService.update(+id, updateGruposExternoDto);
    }
    remove(id) {
        return this.gruposExternosService.remove(+id);
    }
};
exports.GruposExternosController = GruposExternosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grupos_externo_dto_1.CreateGruposExternoDto]),
    __metadata("design:returntype", void 0)
], GruposExternosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GruposExternosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GruposExternosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_grupos_externo_dto_1.UpdateGruposExternoDto]),
    __metadata("design:returntype", void 0)
], GruposExternosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GruposExternosController.prototype, "remove", null);
exports.GruposExternosController = GruposExternosController = __decorate([
    (0, common_1.Controller)('grupos-externos'),
    __metadata("design:paramtypes", [grupos_externos_service_1.GruposExternosService])
], GruposExternosController);
//# sourceMappingURL=grupos_externos.controller.js.map