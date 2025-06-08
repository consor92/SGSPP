import { CreateTerminalidadDto } from './dto/create-terminalidad.dto';
import { UpdateTerminalidadDto } from './dto/update-terminalidad.dto';
export declare class TerminalidadService {
    create(createTerminalidadDto: CreateTerminalidadDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTerminalidadDto: UpdateTerminalidadDto): string;
    remove(id: number): string;
}
