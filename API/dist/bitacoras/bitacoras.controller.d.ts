import { BitacorasService } from './bitacoras.service';
import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
export declare class BitacorasController {
    private readonly bitacorasService;
    constructor(bitacorasService: BitacorasService);
    create(createBitacoraDto: CreateBitacoraDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBitacoraDto: UpdateBitacoraDto): string;
    remove(id: string): string;
}
