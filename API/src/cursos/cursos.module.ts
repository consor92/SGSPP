import { Module } from '@nestjs/common';
import { CursoService } from './cursos.service';
import { CursoController } from './cursos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  controllers: [CursoController],
  providers: [CursoService],
  exports: [ TypeOrmModule]
})
export class CursosModule {}
