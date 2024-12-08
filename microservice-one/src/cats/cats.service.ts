import { Injectable } from '@nestjs/common';
@Injectable()
export class CatsService {
  private count: number = 0;

  counter() {
    return this.count++;
  }
}
