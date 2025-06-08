"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaylyService = void 0;
const common_1 = require("@nestjs/common");
let DaylyService = class DaylyService {
    create(createDaylyDto) {
        return 'This action adds a new dayly';
    }
    findAll() {
        return `This action returns all dayly`;
    }
    findOne(id) {
        return `This action returns a #${id} dayly`;
    }
    update(id, updateDaylyDto) {
        return `This action updates a #${id} dayly`;
    }
    remove(id) {
        return `This action removes a #${id} dayly`;
    }
};
exports.DaylyService = DaylyService;
exports.DaylyService = DaylyService = __decorate([
    (0, common_1.Injectable)()
], DaylyService);
//# sourceMappingURL=dayly.service.js.map