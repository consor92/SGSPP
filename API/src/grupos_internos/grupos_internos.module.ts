import { Module } from '@nestjs/common';
import { GruposInternosService } from './grupos_internos.service';
import { GruposInternosController } from './grupos_internos.controller';

@Module({
  controllers: [GruposInternosController],
  providers: [GruposInternosService],
})
export class GruposInternosModule {}
