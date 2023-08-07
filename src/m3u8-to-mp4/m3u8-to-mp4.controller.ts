import { Controller, Post, Body } from '@nestjs/common';
import { M3u8ToMp4Service } from './m3u8-to-mp4.service';

@Controller('m3u8-to-mp4')
export class M3u8ToMp4Controller {
    constructor(private readonly m3u8ToMp4Service: M3u8ToMp4Service) {}

    @Post()
    async convertM3u8ToMp4(@Body() body: { m3u8Url: string; outputPath: string }) {
        const { m3u8Url, outputPath } = body;
        const mp4FilePath = await this.m3u8ToMp4Service.convertM3u8ToMp4(m3u8Url, outputPath);
        return { mp4FilePath };
    }
}
