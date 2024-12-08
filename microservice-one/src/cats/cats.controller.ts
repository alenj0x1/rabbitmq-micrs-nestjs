import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { CatsService } from './cats.service';

@Controller()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @MessagePattern('hello')
  create(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(context);
    console.log(data);
    return 'yeah, response from microservice';
  }

  @MessagePattern('counter')
  counter() {
    return this.catsService.counter();
  }
}
