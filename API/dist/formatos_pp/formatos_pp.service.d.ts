import { CreateFormatosPpDto } from './dto/create-formatos_pp.dto';
import { UpdateFormatosPpDto } from './dto/update-formatos_pp.dto';
export declare class FormatosPpService {
    create(createFormatosPpDto: CreateFormatosPpDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFormatosPpDto: UpdateFormatosPpDto): string;
    remove(id: number): string;
}
