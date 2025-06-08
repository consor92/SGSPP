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
exports.GruposInternosController = void 0;
const common_1 = require("@nestjs/common");
const grupos_internos_service_1 = require("./grupos_internos.service");
const create_grupos_interno_dto_1 = require("./dto/create-grupos_interno.dto");
const update_grupos_interno_dto_1 = require("./dto/update-grupos_interno.dto");
let GruposInternosController = class GruposInternosController {
    constructor(gruposInternosService) {
        this.gruposInternosService = gruposInternosService;
    }
    create(createGruposInternoDto) {
        return this.gruposInternosService.create(createGruposInternoDto);
    }
    findAll() {
        return this.gruposInternosService.findAll();
    }
    findOne(id) {
        return this.gruposInternosService.findOne(+id);
    }
    update(id, updateGruposInternoDto) {
        return this.gruposInternosService.update(+id, updateGruposInternoDto);
    }
    remove(id) {
        return this.gruposInternosService.remove(+id);
    }
};
exports.GruposInternosController = GruposInternosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grupos_interno_dto_1.CreateGruposInternoDto]),
    __metadata("design:returntype", void 0)
], GruposInternosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GruposInternosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GruposInternosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_grupos_interno_dto_1.UpdateGruposInternoDto]),
    __metadata("design:returntype", void 0)
], GruposInternosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GruposInternosController.prototype, "remove", null);
exports.GruposInternosController = GruposInternosController = __decorate([
    (0, common_1.Controller)('grupos-internos'),
    __metadata("design:paramtypes", [grupos_internos_service_1.GruposInternosService])
], GruposInternosController);
//# sourceMappingURL=grupos_internos.controller.js.map