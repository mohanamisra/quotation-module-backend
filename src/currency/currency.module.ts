import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';

// CONCERNED WITH CURRENCY EXCHANGE API ENDPOINT SERVICING
// HTTP MODULE REQUIRED TO ACCESS A THIRD-PARTY API ENDPOINT

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [CurrencyController],
  providers: [CurrencyService],
})
export class CurrencyModule {}
