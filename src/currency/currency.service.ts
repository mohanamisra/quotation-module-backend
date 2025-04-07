import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

// GETS EXCHANGE RATES FOR CONVERSION FROM INR TO (BASE) USD

@Injectable()
export class CurrencyService {
  private cachedRate: string | null = null;
  private lastFetchedDate: string | null = null;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async fetchExchangeRates() {
    const today = new Date().toISOString().split('T')[0];
    if (this.cachedRate && this.lastFetchedDate === today) {
      return { rate: this.cachedRate };
    }

    const apiKey = this.configService.get<string>('CURRENCY_API_KEY');
    const url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}&symbols=INR`;
    const response = await lastValueFrom(this.httpService.get(url));
    const rate = response.data.rates['INR'];
    this.cachedRate = rate;
    this.lastFetchedDate = today;
    return { rate };
  }
}
