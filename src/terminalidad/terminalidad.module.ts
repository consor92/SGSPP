import { Module } from '@nestjs/common';
import { TerminalidadService } from './terminalidad.service';
import { TerminalidadController } from './terminalidad.controller';

@Module({
  controllers: [TerminalidadController],
  providers: [TerminalidadService],
})
export class TerminalidadModule {}
