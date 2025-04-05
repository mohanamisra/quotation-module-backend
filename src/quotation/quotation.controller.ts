import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Patch(':id')
  async updateQuotation(
    @Param('id') id: string,
    @Body() updatedQuotation: any,
  ) {
    return this.quotationService.updateQuotation(id, updatedQuotation);
  }
}
