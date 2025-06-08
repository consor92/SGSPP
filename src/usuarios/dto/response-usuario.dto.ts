import { IsString, IsOptional, IsEmail, IsInt } from 'class-validator';

export class UsuarioResponseDto {
  constructor(partial: Partial<UsuarioResponseDto>) {
    Object.assign(this, partial); // Asigna las propiedades desde el objeto parcial
} 
 
  id: number;

  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsString()
  dni: string;

  @IsString()
  cuil: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsString()
  localidad?: string;

  @IsString()
  username: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  edad?: number; // Aquí se incluye la edad

  @IsOptional()
  isActive?: boolean; // Estado del usuario (opcional, puede ser establecido por el usuario)


  // También se pueden incluir los campos de creación y actualización
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null; // Si deseas mostrar si el usuario ha sido eliminado
}
