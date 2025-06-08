import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EspecialidadResponseDto {
    @IsInt()
    id: number; // ID de la especialidad

    @IsNotEmpty()
    @IsString()
    nombre: string; // Nombre de la especialidad
}
