import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CursoResponseDto {
    @IsInt()
    id: number; // ID del curso

    @IsNotEmpty()
    @IsString()
    nombre: string; // Nombre del curso

    @IsOptional()
    ciclo_lectivo?: number; // Ciclo lectivo del curso, opcional

    @IsOptional()
    @IsString()
    codigo_matriculacion?: string; // Código de matriculación, opcional

    @IsOptional()
    @IsInt()
    especialidad_id?: number; // ID de la especialidad relacionada, opcional

    // Puedes agregar aquí otros campos que consideres relevantes para la respuesta
}
