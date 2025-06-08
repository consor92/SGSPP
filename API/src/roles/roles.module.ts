import { Module } from '@nestjs/common';
import { RolService } from './roles.service';
import { RolController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rol } from './entities/role.entity';
import { Curso } from '../cursos/entities/curso.entity';
import { UsuariosModule } from '../usuarios/usuarios.module'; 
import { CursosModule } from '../cursos/cursos.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Rol,Curso]),
    UsuariosModule,
    CursosModule,
  ],
  controllers: [RolController],
  providers: [RolService],
})
export class RolesModule {}
