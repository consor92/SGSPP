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
exports.TerminalidadController = void 0;
const common_1 = require("@nestjs/common");
const terminalidad_service_1 = require("./terminalidad.service");
const create_terminalidad_dto_1 = require("./dto/create-terminalidad.dto");
const update_terminalidad_dto_1 = require("./dto/update-terminalidad.dto");
let TerminalidadController = class TerminalidadController {
    constructor(terminalidadService) {
        this.terminalidadService = terminalidadService;
    }
    create(createTerminalidadDto) {
        return this.terminalidadService.create(createTerminalidadDto);
    }
    findAll() {
        return this.terminalidadService.findAll();
    }
    findOne(id) {
        return this.terminalidadService.findOne(+id);
    }
    update(id, updateTerminalidadDto) {
        return this.terminalidadService.update(+id, updateTerminalidadDto);
    }
    remove(id) {
        return this.terminalidadService.remove(+id);
    }
};
exports.TerminalidadController = TerminalidadController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_terminalidad_dto_1.CreateTerminalidadDto]),
    __metadata("design:returntype", void 0)
], TerminalidadController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TerminalidadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TerminalidadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_terminalidad_dto_1.UpdateTerminalidadDto]),
    __metadata("design:returntype", void 0)
], TerminalidadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TerminalidadController.prototype, "remove", null);
exports.TerminalidadController = TerminalidadController = __decorate([
    (0, common_1.Controller)('terminalidad'),
    __metadata("design:paramtypes", [terminalidad_service_1.TerminalidadService])
], TerminalidadController);
//# sourceMappingURL=terminalidad.controller.js.map