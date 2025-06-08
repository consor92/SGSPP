import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateEspecialidadDto {
    @IsNotEmpty()
    @IsString()
    nombre: string; // Nombre de la especialidad
}
