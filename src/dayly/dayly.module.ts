import { Module } from '@nestjs/common';
import { DaylyService } from './dayly.service';
import { DaylyController } from './dayly.controller';

@Module({
  controllers: [DaylyController],
  providers: [DaylyService],
})
export class DaylyModule {}
