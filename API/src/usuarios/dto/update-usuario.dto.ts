import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsString, IsNotEmpty, IsOptional, Length, IsEmail, IsDate } from 'class-validator';


export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsOptional()
  @IsString()
  @Length(8, 60)  // También se recomienda mantener la longitud mínima para contraseñas
  password?: string;
}
