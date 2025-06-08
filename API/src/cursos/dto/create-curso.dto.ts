import { IsNotEmpty, IsOptional, IsString, IsInt, Max, Min } from 'class-validator';

export class CreateCursoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string; // Nombre del curso

    @IsOptional()
    ciclo_lectivo?: number; // Ciclo lectivo del curso

    @IsOptional()
    @IsString()
    codigo_matriculacion?: string; // Código de matriculación, opcional

    @IsOptional()
    especialidad_id?: number; // ID de la especialidad relacionada
}
