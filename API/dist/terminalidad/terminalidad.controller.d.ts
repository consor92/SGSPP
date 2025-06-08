import { TerminalidadService } from './terminalidad.service';
import { CreateTerminalidadDto } from './dto/create-terminalidad.dto';
import { UpdateTerminalidadDto } from './dto/update-terminalidad.dto';
export declare class TerminalidadController {
    private readonly terminalidadService;
    constructor(terminalidadService: TerminalidadService);
    create(createTerminalidadDto: CreateTerminalidadDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTerminalidadDto: UpdateTerminalidadDto): string;
    remove(id: string): string;
}
