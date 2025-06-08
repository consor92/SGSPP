import { IsInt, IsNumber, IsString } from 'class-validator';

export class RolResponseDto {
  @IsInt()
  id: number;

  @IsNumber()
  privilegios: number;

  // Puedes incluir información adicional sobre el usuario si es necesario
  usuario?: {
    id: number;
    nombre: string;
    apellido: string;
    // Agrega otros campos relevantes del usuario según sea necesario
  };

  // Puedes incluir información adicional sobre el curso si es necesario
  curso?: {
    id: number;
    nombre: string;
    ciclo_lectivo: number;
    codigo_matriculacion: string;
    // Agrega otros campos relevantes del curso según sea necesario
  };
}
