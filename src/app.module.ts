import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PostsController} from "./posts.controller";
import { M3u8ToMp4Controller } from './m3u8-to-mp4/m3u8-to-mp4.controller';
import { M3u8ToMp4Service } from './m3u8-to-mp4/m3u8-to-mp4.service';

@Module({
  imports: [],
  controllers: [AppController,PostsController, M3u8ToMp4Controller],
  providers: [AppService, M3u8ToMp4Service],
})
export class AppModule {}
