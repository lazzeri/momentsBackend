import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import axios from 'axios';
import m3u8ToMp4 from 'm3u8-to-mp4';

@Injectable()
export class M3u8ToMp4Service {
    async convertM3u8ToMp4(m3u8Url: string, outputPath: string): Promise<string> {
        try {
            const { data } = await axios.get(m3u8Url);
            const m3u8Content = data;
            const mp4FilePath = `${outputPath}.mp4`;
            const outputStream = createWriteStream(mp4FilePath);

            await m3u8ToMp4(m3u8Content, outputStream);

            return mp4FilePath;
        } catch (error) {
            console.error('Error converting m3u8 to mp4:', error);
            throw new Error('Failed to convert m3u8 to mp4');
        }
    }
}
