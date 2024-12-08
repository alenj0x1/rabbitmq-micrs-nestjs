import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TestsService {
  constructor(@Inject('ONE_MICROSERVICE') private readonly one: ClientProxy) {
    this.one.connect();
  }

  hello() {
    return firstValueFrom(this.one.send('hello', 'taka'));
  }

  counter() {
    return firstValueFrom(this.one.send('counter', 0));
  }
}
