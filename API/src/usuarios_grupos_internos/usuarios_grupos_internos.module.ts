import { Module } from '@nestjs/common';
import { UsuariosGruposInternosService } from './usuarios_grupos_internos.service';
import { UsuariosGruposInternosController } from './usuarios_grupos_internos.controller';

@Module({
  controllers: [UsuariosGruposInternosController],
  providers: [UsuariosGruposInternosService],
})
export class UsuariosGruposInternosModule {}
