import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class AppUpdate {
  constructor(private readonly appService: AppService) {}

  @Start()
  async StartCommand(ctx: Context) {
    this.appService.getHello(ctx);
  }
}
