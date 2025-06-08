import { Module } from '@nestjs/common';
import { GruposExternosService } from './grupos_externos.service';
import { GruposExternosController } from './grupos_externos.controller';

@Module({
  controllers: [GruposExternosController],
  providers: [GruposExternosService],
})
export class GruposExternosModule {}
