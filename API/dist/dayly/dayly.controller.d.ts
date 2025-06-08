import { DaylyService } from './dayly.service';
import { CreateDaylyDto } from './dto/create-dayly.dto';
import { UpdateDaylyDto } from './dto/update-dayly.dto';
export declare class DaylyController {
    private readonly daylyService;
    constructor(daylyService: DaylyService);
    create(createDaylyDto: CreateDaylyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateDaylyDto: UpdateDaylyDto): string;
    remove(id: string): string;
}
