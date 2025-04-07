import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// STARTUP TEMPLATE. NO CHANGES REQUIRED SO FAR.

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
