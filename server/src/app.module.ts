import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GameLogic } from './modules/gamelogic/gamelogic.module';
import { ParityPeriodModule } from './modules/parity-period/parity-period.module';
import { EventsModule } from './modules/socket/events.module';

@Module({
  imports: [DatabaseModule, ScheduleModule.forRoot(), ParityPeriodModule , GameLogic , EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
