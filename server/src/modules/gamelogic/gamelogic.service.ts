import { Injectable } from '@nestjs/common';
import { EventsGateway } from '../socket/events.gateway';
import {TimerModal} from '../../database/models/timer.moudle'

@Injectable()
export class GameLogicService {
  static minutes = 1;
  static seconds = 0;
  static winnerNumber: number;
  static winnerColor: string;
  static parityPeriod = 10000;
  constructor(
    private readonly eventsGateway: EventsGateway,
  ) {
    setInterval(() => {

      if (GameLogicService.seconds > 0) {
        GameLogicService.seconds = GameLogicService.seconds - 1;
      }
      if (GameLogicService.seconds === 0) {
        if (GameLogicService.minutes === 0) {
          GameLogicService.minutes = 1;
          GameLogicService.seconds = 0;
          GameLogicService.parityPeriod =  GameLogicService.parityPeriod + 1;
          GameLogicService.winnerNumber = Math.floor(Math.random() * 10);
          if (GameLogicService.winnerNumber === 0 || GameLogicService.winnerNumber ===  5) {
            GameLogicService.winnerColor = 'voilet';
          } else if (GameLogicService.winnerNumber % 2) {
            GameLogicService.winnerColor = 'red';
          } else {
            GameLogicService.winnerColor = 'green';
          }
        } else {
          GameLogicService.minutes = GameLogicService.minutes - 1;
          GameLogicService.seconds = 59;
        }
      }
      console.log(GameLogicService.seconds);
    }, 1000);
  }
  gameLogic() {

    // this.eventsGateway.timerEmit(
    //   {
    //     minutes: GameLogicService.minutes,
    //     seconds: GameLogicService.seconds,
    //     winnerNumber: GameLogicService.winnerNumber,
    //     winnerColor : GameLogicService.winnerColor,
    //     perityPeriod : GameLogicService.parityPeriod,
    //   }
    // )

    this.eventsGateway.timerEmit('This is for the testing of')
    return (" This gamelogic is working")
  }
}
