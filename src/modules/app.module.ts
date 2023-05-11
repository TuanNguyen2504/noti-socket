import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CheckHealthModule } from './check-health/check-health.module';

@Module({
  imports: [ConfigModule.forRoot({}), CheckHealthModule]
})
export class AppModule {}
