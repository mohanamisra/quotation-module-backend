import { Injectable } from '@nestjs/common';

// THIS IS NESTJS START-UP TEMPLATE. NO CHANGES REQUIRED SO FAR.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
