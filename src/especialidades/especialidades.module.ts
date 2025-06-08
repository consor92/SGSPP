import { Module } from '@nestjs/common';
import { EspecialidadService } from './especialidades.service';
import { EspecialidadController } from './especialidades.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especialidad } from './entities/especialidade.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Especialidad])],
  controllers: [EspecialidadController],
  providers: [EspecialidadService],
})
export class EspecialidadesModule {}
