import { PartialType } from '@nestjs/mapped-types';
import { CreateGruposExternoDto } from './create-grupos_externo.dto';

export class UpdateGruposExternoDto extends PartialType(CreateGruposExternoDto) {}
