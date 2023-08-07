import { Test, TestingModule } from '@nestjs/testing';
import { M3u8ToMp4Service } from './m3u8-to-mp4.service';

describe('M3u8ToMp4Service', () => {
  let service: M3u8ToMp4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [M3u8ToMp4Service],
    }).compile();

    service = module.get<M3u8ToMp4Service>(M3u8ToMp4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
