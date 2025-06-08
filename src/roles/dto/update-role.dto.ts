import { IsInt, IsOptional, IsString, Length, Max, Min } from 'class-validator';

export class UpdateRolDto {
  @IsOptional()
  @IsInt()
  usuarioId?: number;

  @IsOptional()
  @IsInt()
  cursoId?: number;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  rol?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  privilegios?: number;  
}
