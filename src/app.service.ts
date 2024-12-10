import { Injectable } from '@nestjs/common';
import { Context } from 'telegraf';

@Injectable()
export class AppService {
  getHello(ctx: Context) {
    ctx.reply('Hello World!');
  }
}
