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
exports.BitacorasController = void 0;
const common_1 = require("@nestjs/common");
const bitacoras_service_1 = require("./bitacoras.service");
const create_bitacora_dto_1 = require("./dto/create-bitacora.dto");
const update_bitacora_dto_1 = require("./dto/update-bitacora.dto");
let BitacorasController = class BitacorasController {
    constructor(bitacorasService) {
        this.bitacorasService = bitacorasService;
    }
    create(createBitacoraDto) {
        return this.bitacorasService.create(createBitacoraDto);
    }
    findAll() {
        return this.bitacorasService.findAll();
    }
    findOne(id) {
        return this.bitacorasService.findOne(+id);
    }
    update(id, updateBitacoraDto) {
        return this.bitacorasService.update(+id, updateBitacoraDto);
    }
    remove(id) {
        return this.bitacorasService.remove(+id);
    }
};
exports.BitacorasController = BitacorasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bitacora_dto_1.CreateBitacoraDto]),
    __metadata("design:returntype", void 0)
], BitacorasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BitacorasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BitacorasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bitacora_dto_1.UpdateBitacoraDto]),
    __metadata("design:returntype", void 0)
], BitacorasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BitacorasController.prototype, "remove", null);
exports.BitacorasController = BitacorasController = __decorate([
    (0, common_1.Controller)('bitacoras'),
    __metadata("design:paramtypes", [bitacoras_service_1.BitacorasService])
], BitacorasController);
//# sourceMappingURL=bitacoras.controller.js.map