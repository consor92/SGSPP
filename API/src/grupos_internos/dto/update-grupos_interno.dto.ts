import { PartialType } from '@nestjs/mapped-types';
import { CreateGruposInternoDto } from './create-grupos_interno.dto';

export class UpdateGruposInternoDto extends PartialType(CreateGruposInternoDto) {}
