import { Module } from '@nestjs/common';
import { TestsModule } from './tests/tests.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [TestsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
