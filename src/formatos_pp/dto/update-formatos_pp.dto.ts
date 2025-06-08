import { PartialType } from '@nestjs/mapped-types';
import { CreateFormatosPpDto } from './create-formatos_pp.dto';

export class UpdateFormatosPpDto extends PartialType(CreateFormatosPpDto) {}
