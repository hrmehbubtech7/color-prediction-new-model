import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "http";
import { TimerModal } from "src/database/models/timer.moudle";

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server : Server;

    async handleConnection(client: any, ...args: any[]) {
        console.log('new user connected')
        this.server.emit("connected", {"message": "new User Connected"})
    }

    async handleDisconnect(client: any, ...args: any[]) {

    }
    // timerEmit(timerModal : TimerModal ) :void  {
    //     this.server.emit("timerModal" ,timerModal)
    // }

    timerEmit(message : string ) :void  {
        this.server.emit("message" ,message)
    }




    
}