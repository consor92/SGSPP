"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAsistenciaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_asistencia_dto_1 = require("./create-asistencia.dto");
class UpdateAsistenciaDto extends (0, mapped_types_1.PartialType)(create_asistencia_dto_1.CreateAsistenciaDto) {
}
exports.UpdateAsistenciaDto = UpdateAsistenciaDto;
//# sourceMappingURL=update-asistencia.dto.js.map