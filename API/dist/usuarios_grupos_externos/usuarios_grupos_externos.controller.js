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
exports.UsuariosGruposExternosController = void 0;
const common_1 = require("@nestjs/common");
const usuarios_grupos_externos_service_1 = require("./usuarios_grupos_externos.service");
const create_usuarios_grupos_externo_dto_1 = require("./dto/create-usuarios_grupos_externo.dto");
const update_usuarios_grupos_externo_dto_1 = require("./dto/update-usuarios_grupos_externo.dto");
let UsuariosGruposExternosController = class UsuariosGruposExternosController {
    constructor(usuariosGruposExternosService) {
        this.usuariosGruposExternosService = usuariosGruposExternosService;
    }
    create(createUsuariosGruposExternoDto) {
        return this.usuariosGruposExternosService.create(createUsuariosGruposExternoDto);
    }
    findAll() {
        return this.usuariosGruposExternosService.findAll();
    }
    findOne(id) {
        return this.usuariosGruposExternosService.findOne(+id);
    }
    update(id, updateUsuariosGruposExternoDto) {
        return this.usuariosGruposExternosService.update(+id, updateUsuariosGruposExternoDto);
    }
    remove(id) {
        return this.usuariosGruposExternosService.remove(+id);
    }
};
exports.UsuariosGruposExternosController = UsuariosGruposExternosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_usuarios_grupos_externo_dto_1.CreateUsuariosGruposExternoDto]),
    __metadata("design:returntype", void 0)
], UsuariosGruposExternosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsuariosGruposExternosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosGruposExternosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_usuarios_grupos_externo_dto_1.UpdateUsuariosGruposExternoDto]),
    __metadata("design:returntype", void 0)
], UsuariosGruposExternosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsuariosGruposExternosController.prototype, "remove", null);
exports.UsuariosGruposExternosController = UsuariosGruposExternosController = __decorate([
    (0, common_1.Controller)('usuarios-grupos-externos'),
    __metadata("design:paramtypes", [usuarios_grupos_externos_service_1.UsuariosGruposExternosService])
], UsuariosGruposExternosController);
//# sourceMappingURL=usuarios_grupos_externos.controller.js.map