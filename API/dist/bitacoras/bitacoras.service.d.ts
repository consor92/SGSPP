import { CreateBitacoraDto } from './dto/create-bitacora.dto';
import { UpdateBitacoraDto } from './dto/update-bitacora.dto';
export declare class BitacorasService {
    create(createBitacoraDto: CreateBitacoraDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBitacoraDto: UpdateBitacoraDto): string;
    remove(id: number): string;
}
