import { IsOptional, IsString, IsInt, Max, Min } from 'class-validator';

export class UpdateCursoDto {
    @IsOptional()
    @IsString()
    nombre?: string; // Nombre del curso, opcional para actualizar

    @IsOptional()
    ciclo_lectivo?: number; // Ciclo lectivo del curso, opcional para actualizar

    @IsOptional()
    @IsString()
    codigo_matriculacion?: string; // Código de matriculación, opcional para actualizar

    @IsOptional()
    especialidad_id?: number; // ID de la especialidad relacionada, opcional para actualizar
}
