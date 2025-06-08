import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosGruposInternoDto } from './create-usuarios_grupos_interno.dto';

export class UpdateUsuariosGruposInternoDto extends PartialType(CreateUsuariosGruposInternoDto) {}
