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
exports.DaylyController = void 0;
const common_1 = require("@nestjs/common");
const dayly_service_1 = require("./dayly.service");
const create_dayly_dto_1 = require("./dto/create-dayly.dto");
const update_dayly_dto_1 = require("./dto/update-dayly.dto");
let DaylyController = class DaylyController {
    constructor(daylyService) {
        this.daylyService = daylyService;
    }
    create(createDaylyDto) {
        return this.daylyService.create(createDaylyDto);
    }
    findAll() {
        return this.daylyService.findAll();
    }
    findOne(id) {
        return this.daylyService.findOne(+id);
    }
    update(id, updateDaylyDto) {
        return this.daylyService.update(+id, updateDaylyDto);
    }
    remove(id) {
        return this.daylyService.remove(+id);
    }
};
exports.DaylyController = DaylyController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dayly_dto_1.CreateDaylyDto]),
    __metadata("design:returntype", void 0)
], DaylyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DaylyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DaylyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dayly_dto_1.UpdateDaylyDto]),
    __metadata("design:returntype", void 0)
], DaylyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DaylyController.prototype, "remove", null);
exports.DaylyController = DaylyController = __decorate([
    (0, common_1.Controller)('dayly'),
    __metadata("design:paramtypes", [dayly_service_1.DaylyService])
], DaylyController);
//# sourceMappingURL=dayly.controller.js.map