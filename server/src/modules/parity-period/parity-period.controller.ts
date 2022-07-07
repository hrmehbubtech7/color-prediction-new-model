import { Controller, Get } from '@nestjs/common';
import { GameLogicService } from '../gamelogic/gamelogic.service';
import { ParityPeriodService } from './parity-period.service';

@Controller('parity-period')
export class ParityPeriodController {
  constructor(
    private parityPeriodService: ParityPeriodService,
    private gameLogicService: GameLogicService,
  ) {}

  @Get('/timer')
  getTime (){
    return this.gameLogicService.gameLogic();
    // return "Hello World! form timer "

  }

  @Get()
  findAll() {
    return "Hi ! Dhruv"
  }



}
