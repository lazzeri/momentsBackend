import { Controller, Get } from '@nestjs/common';

@Controller()
export class PostsController {
    @Get('/createPost')
    createPost(): string {
        return 'test';
    }
}
