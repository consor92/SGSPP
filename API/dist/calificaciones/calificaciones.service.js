"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalificacionesService = void 0;
const common_1 = require("@nestjs/common");
let CalificacionesService = class CalificacionesService {
    create(createCalificacioneDto) {
        return 'This action adds a new calificacione';
    }
    findAll() {
        return `This action returns all calificaciones`;
    }
    findOne(id) {
        return `This action returns a #${id} calificacione`;
    }
    update(id, updateCalificacioneDto) {
        return `This action updates a #${id} calificacione`;
    }
    remove(id) {
        return `This action removes a #${id} calificacione`;
    }
};
exports.CalificacionesService = CalificacionesService;
exports.CalificacionesService = CalificacionesService = __decorate([
    (0, common_1.Injectable)()
], CalificacionesService);
//# sourceMappingURL=calificaciones.service.js.map