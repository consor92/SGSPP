"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormatosPpService = void 0;
const common_1 = require("@nestjs/common");
let FormatosPpService = class FormatosPpService {
    create(createFormatosPpDto) {
        return 'This action adds a new formatosPp';
    }
    findAll() {
        return `This action returns all formatosPp`;
    }
    findOne(id) {
        return `This action returns a #${id} formatosPp`;
    }
    update(id, updateFormatosPpDto) {
        return `This action updates a #${id} formatosPp`;
    }
    remove(id) {
        return `This action removes a #${id} formatosPp`;
    }
};
exports.FormatosPpService = FormatosPpService;
exports.FormatosPpService = FormatosPpService = __decorate([
    (0, common_1.Injectable)()
], FormatosPpService);
//# sourceMappingURL=formatos_pp.service.js.map