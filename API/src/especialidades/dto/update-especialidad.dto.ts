import { IsOptional, IsString } from 'class-validator';

export class UpdateEspecialidadDto {
    @IsOptional()
    @IsString()
    nombre?: string; // Nombre de la especialidad, opcional para actualizar
}
