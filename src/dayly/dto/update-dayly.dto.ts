import { PartialType } from '@nestjs/mapped-types';
import { CreateDaylyDto } from './create-dayly.dto';

export class UpdateDaylyDto extends PartialType(CreateDaylyDto) {}
