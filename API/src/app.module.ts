import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { CursosModule } from './cursos/cursos.module';
import { AsistenciasModule } from './asistencias/asistencias.module';
import { BitacorasModule } from './bitacoras/bitacoras.module';
import { GruposInternosModule } from './grupos_internos/grupos_internos.module';
import { UsuariosGruposInternosModule } from './usuarios_grupos_internos/usuarios_grupos_internos.module';
import { UsuariosGruposExternosModule } from './usuarios_grupos_externos/usuarios_grupos_externos.module';
import { GruposExternosModule } from './grupos_externos/grupos_externos.module';
import { DaylyModule } from './dayly/dayly.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { TerminalidadModule } from './terminalidad/terminalidad.module';
import { FormatosPpModule } from './formatos_pp/formatos_pp.module';
import { CalificacionesModule } from './calificaciones/calificaciones.module';
import { AsignaturasModule } from './asignaturas/asignaturas.module';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'SGSPP2',
      autoLoadEntities: true,
      //entities: [], //entidad por entidad
      //synchronize: true,
      cache: { duration: 30000 },
      retryAttempts: 5,     // Número de intentos de reconexión
      retryDelay: 3000,     // Retraso en milisegundos entre cada intento (3 segundos)
      charset: 'utf8mb4_spanish_ci',  // Soporta caracteres multilingües y emojis
      //timezone: 'America/Argentina/Buenos_Aires', 
      //logging: true,
    }),
    UsuariosModule,
    RolesModule, 
    CursosModule, 
    EspecialidadesModule, 
    // AsistenciasModule, 
    //BitacorasModule,
    //GruposInternosModule, 
    //UsuariosGruposInternosModule, 
    //UsuariosGruposExternosModule, 
    //GruposExternosModule, 
    //DaylyModule, 
    //ProyectosModule, 
    //TerminalidadModule, 
    //FormatosPpModule, 
    //CalificacionesModule, 
    //AsignaturasModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
