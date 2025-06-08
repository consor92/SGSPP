import { CreateDaylyDto } from './dto/create-dayly.dto';
import { UpdateDaylyDto } from './dto/update-dayly.dto';
export declare class DaylyService {
    create(createDaylyDto: CreateDaylyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateDaylyDto: UpdateDaylyDto): string;
    remove(id: number): string;
}
