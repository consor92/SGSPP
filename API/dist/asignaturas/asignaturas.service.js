"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignaturasService = void 0;
const common_1 = require("@nestjs/common");
let AsignaturasService = class AsignaturasService {
    create(createAsignaturaDto) {
        return 'This action adds a new asignatura';
    }
    findAll() {
        return `This action returns all asignaturas`;
    }
    findOne(id) {
        return `This action returns a #${id} asignatura`;
    }
    update(id, updateAsignaturaDto) {
        return `This action updates a #${id} asignatura`;
    }
    remove(id) {
        return `This action removes a #${id} asignatura`;
    }
};
exports.AsignaturasService = AsignaturasService;
exports.AsignaturasService = AsignaturasService = __decorate([
    (0, common_1.Injectable)()
], AsignaturasService);
//# sourceMappingURL=asignaturas.service.js.map