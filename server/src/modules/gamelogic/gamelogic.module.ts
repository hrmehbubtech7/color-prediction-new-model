import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { EventsGateway } from "../socket/events.gateway";
import { EventsModule } from "../socket/events.module";
import { GameLogicService } from "./gamelogic.service";

@Module({
    controllers : [],
    providers: [GameLogicService , EventsGateway],
    exports: [],
    imports : [SequelizeModule.forFeature([])],
})

export class GameLogic {}