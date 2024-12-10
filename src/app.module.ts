import { Module } from '@nestjs/common';
import { AppUpdate } from './app.update';
import { AppService } from './app.service';

@Module({
  providers: [AppService, AppUpdate],
})
export class AppModule {}
