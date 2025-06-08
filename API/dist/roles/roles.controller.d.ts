import { RolService } from './roles.service';
import { CreateRolDto } from './dto/create-role.dto';
import { UpdateRolDto } from './dto/update-role.dto';
import { RolResponseDto } from './dto/response-role.dto';
export declare class RolController {
    private readonly rolService;
    constructor(rolService: RolService);
    create(createRolDto: CreateRolDto): Promise<RolResponseDto>;
    findAll(): Promise<RolResponseDto[]>;
    findOne(id: number): Promise<RolResponseDto>;
    update(id: number, updateRolDto: UpdateRolDto): Promise<RolResponseDto>;
    remove(id: number): Promise<void>;
}
