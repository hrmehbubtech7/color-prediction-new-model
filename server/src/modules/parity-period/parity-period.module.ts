import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { PartiyPeriodSchema } from "src/database/schemas/parity-period.schema";
import { GameLogic } from "../gamelogic/gamelogic.module";
import { GameLogicService } from "../gamelogic/gamelogic.service";
import { EventsModule } from "../socket/events.module";
import { ParityPeriodController } from "./parity-period.controller";
import { ParityPeriodService } from "./parity-period.service";

@Module({
    controllers: [ParityPeriodController],
    providers: [ParityPeriodService , GameLogicService],
    imports: [SequelizeModule.forFeature([PartiyPeriodSchema]) , GameLogic , EventsModule],
    exports: [],
})

export class ParityPeriodModule{}
