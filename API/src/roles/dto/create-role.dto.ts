import { IsString, IsNotEmpty, IsInt, Min, Max, Length } from 'class-validator';

export class CreateRolDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 50)  // Mantener la longitud en consonancia con el tipo VARCHAR
  nombre: string;

  @IsInt()
  @Min(1)
  @Max(100)  // Rango suposicional de los privilegios
  privilegios: number;

  @IsInt()
  usuario: number;

  @IsInt()
  curso: number;  
}
