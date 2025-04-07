import { Controller, Get } from '@nestjs/common';
import { CurrencyService } from './currency.service';

// ONLY SERVICES HTTP GET REQUESTS

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('rates')
  async getRates() {
    return this.currencyService.fetchExchangeRates();
  }
}
