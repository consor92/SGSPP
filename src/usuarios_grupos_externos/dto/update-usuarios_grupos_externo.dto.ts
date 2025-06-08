import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosGruposExternoDto } from './create-usuarios_grupos_externo.dto';

export class UpdateUsuariosGruposExternoDto extends PartialType(CreateUsuariosGruposExternoDto) {}
