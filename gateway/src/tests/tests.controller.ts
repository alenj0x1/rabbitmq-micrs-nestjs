import { Controller, Get } from '@nestjs/common';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Get('hello')
  public async hello() {
    return await this.testsService.hello();
  }

  @Get('counter')
  public async counter() {
    return await this.testsService.counter();
  }
}
