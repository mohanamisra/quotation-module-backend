import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuotationService } from './quotation.service';

@Controller('quotations')
export class QuotationController {
  constructor(private readonly quotationService: QuotationService) {}

  @Get()
  async getAll() {
    return this.quotationService.getAllQuotations();
  }

  @Post()
  async create(@Body() quotation: any) {
    return this.quotationService.create(quotation);
  }
}
