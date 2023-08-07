import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {M3u8ToMp4Service} from './m3u8-to-mp4/m3u8-to-mp4.service';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    console.log('ready!');
    convertM3u8ToMp4(app);
}

bootstrap();

async function convertM3u8ToMp4(app) {
    const m3u8Url = 'https://hls.younow.com/momentsplaylists/live/66426895/66426895.m3u8';
    const outputPath = './output/test_video';
    const m3u8ToMp4Service = app.get(M3u8ToMp4Service);

    try {
        const mp4FilePath = await m3u8ToMp4Service.convertM3u8ToMp4(m3u8Url, outputPath);
        console.log(`MP4 file converted successfully. Path: ${mp4FilePath}`);
    } catch (error) {
        console.error('Failed to convert m3u8 to mp4:', error);
    } finally {
        console.log('DONE');
    }
}
