import { Module } from '@nestjs/common';
import { UsuariosGruposExternosService } from './usuarios_grupos_externos.service';
import { UsuariosGruposExternosController } from './usuarios_grupos_externos.controller';

@Module({
  controllers: [UsuariosGruposExternosController],
  providers: [UsuariosGruposExternosService],
})
export class UsuariosGruposExternosModule {}
