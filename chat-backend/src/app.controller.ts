import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PusherService } from './pusher/pusher.service';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private pursherService: PusherService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('messages')
  async messages(
    @Body('username') username: string,
    @Body('message') message: string,
  ) {
    const result = await this.pursherService.trigger(
      'my-chat-room-channel',
      'chat-message-event',
      {
        username,
        message,
      },
    );
    console.log({ username, message, result });
    return result;
  }
}
