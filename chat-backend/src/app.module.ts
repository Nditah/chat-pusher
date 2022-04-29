import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PusherService } from './pusher/pusher.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PusherService],
})
export class AppModule {}
