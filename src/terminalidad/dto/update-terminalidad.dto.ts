import { PartialType } from '@nestjs/mapped-types';
import { CreateTerminalidadDto } from './create-terminalidad.dto';

export class UpdateTerminalidadDto extends PartialType(CreateTerminalidadDto) {}
