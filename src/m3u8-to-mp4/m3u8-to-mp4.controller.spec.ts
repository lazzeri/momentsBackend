import { Test, TestingModule } from '@nestjs/testing';
import { M3u8ToMp4Controller } from './m3u8-to-mp4.controller';

describe('M3u8ToMp4Controller', () => {
  let controller: M3u8ToMp4Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [M3u8ToMp4Controller],
    }).compile();

    controller = module.get<M3u8ToMp4Controller>(M3u8ToMp4Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
