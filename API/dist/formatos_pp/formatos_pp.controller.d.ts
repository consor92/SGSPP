import { FormatosPpService } from './formatos_pp.service';
import { CreateFormatosPpDto } from './dto/create-formatos_pp.dto';
import { UpdateFormatosPpDto } from './dto/update-formatos_pp.dto';
export declare class FormatosPpController {
    private readonly formatosPpService;
    constructor(formatosPpService: FormatosPpService);
    create(createFormatosPpDto: CreateFormatosPpDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFormatosPpDto: UpdateFormatosPpDto): string;
    remove(id: string): string;
}
