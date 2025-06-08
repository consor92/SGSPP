"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DaylyModule = void 0;
const common_1 = require("@nestjs/common");
const dayly_service_1 = require("./dayly.service");
const dayly_controller_1 = require("./dayly.controller");
let DaylyModule = class DaylyModule {
};
exports.DaylyModule = DaylyModule;
exports.DaylyModule = DaylyModule = __decorate([
    (0, common_1.Module)({
        controllers: [dayly_controller_1.DaylyController],
        providers: [dayly_service_1.DaylyService],
    })
], DaylyModule);
//# sourceMappingURL=dayly.module.js.map