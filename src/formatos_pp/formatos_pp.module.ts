import { Module } from '@nestjs/common';
import { FormatosPpService } from './formatos_pp.service';
import { FormatosPpController } from './formatos_pp.controller';

@Module({
  controllers: [FormatosPpController],
  providers: [FormatosPpService],
})
export class FormatosPpModule {}
