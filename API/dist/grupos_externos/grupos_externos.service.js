"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GruposExternosService = void 0;
const common_1 = require("@nestjs/common");
let GruposExternosService = class GruposExternosService {
    create(createGruposExternoDto) {
        return 'This action adds a new gruposExterno';
    }
    findAll() {
        return `This action returns all gruposExternos`;
    }
    findOne(id) {
        return `This action returns a #${id} gruposExterno`;
    }
    update(id, updateGruposExternoDto) {
        return `This action updates a #${id} gruposExterno`;
    }
    remove(id) {
        return `This action removes a #${id} gruposExterno`;
    }
};
exports.GruposExternosService = GruposExternosService;
exports.GruposExternosService = GruposExternosService = __decorate([
    (0, common_1.Injectable)()
], GruposExternosService);
//# sourceMappingURL=grupos_externos.service.js.map