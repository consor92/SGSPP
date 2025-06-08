import { IsString, IsNotEmpty, IsOptional, Length, IsEmail, IsDate, IsDateString  } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  apellido: string;

  @IsString()
  @IsNotEmpty()
  dni: string;

  @IsString()
  @IsNotEmpty()
  cuil: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 50)
  username: string;

  @IsOptional()
  @IsString()
  @Length(7, 20)
  telefono?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsString()
  localidad?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;  // Este campo puede ser opcional al crear el usuario

  @IsOptional()
  @IsDateString()
  fecha_nacimiento?: Date;

  @IsOptional()
  @IsString()
  @Length(7, 20)
  tel_responsable?: string;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  nombre_responsable?: string;

  @IsOptional()
  isActive?: boolean; // Estado del usuario (opcional, puede ser establecido por el usuario)
}
