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
exports.FormatosPpController = void 0;
const common_1 = require("@nestjs/common");
const formatos_pp_service_1 = require("./formatos_pp.service");
const create_formatos_pp_dto_1 = require("./dto/create-formatos_pp.dto");
const update_formatos_pp_dto_1 = require("./dto/update-formatos_pp.dto");
let FormatosPpController = class FormatosPpController {
    constructor(formatosPpService) {
        this.formatosPpService = formatosPpService;
    }
    create(createFormatosPpDto) {
        return this.formatosPpService.create(createFormatosPpDto);
    }
    findAll() {
        return this.formatosPpService.findAll();
    }
    findOne(id) {
        return this.formatosPpService.findOne(+id);
    }
    update(id, updateFormatosPpDto) {
        return this.formatosPpService.update(+id, updateFormatosPpDto);
    }
    remove(id) {
        return this.formatosPpService.remove(+id);
    }
};
exports.FormatosPpController = FormatosPpController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_formatos_pp_dto_1.CreateFormatosPpDto]),
    __metadata("design:returntype", void 0)
], FormatosPpController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FormatosPpController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormatosPpController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_formatos_pp_dto_1.UpdateFormatosPpDto]),
    __metadata("design:returntype", void 0)
], FormatosPpController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FormatosPpController.prototype, "remove", null);
exports.FormatosPpController = FormatosPpController = __decorate([
    (0, common_1.Controller)('formatos-pp'),
    __metadata("design:paramtypes", [formatos_pp_service_1.FormatosPpService])
], FormatosPpController);
//# sourceMappingURL=formatos_pp.controller.js.map