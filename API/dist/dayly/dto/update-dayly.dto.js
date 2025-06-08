"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDaylyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dayly_dto_1 = require("./create-dayly.dto");
class UpdateDaylyDto extends (0, mapped_types_1.PartialType)(create_dayly_dto_1.CreateDaylyDto) {
}
exports.UpdateDaylyDto = UpdateDaylyDto;
//# sourceMappingURL=update-dayly.dto.js.map