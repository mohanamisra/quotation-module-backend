import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { QuotationService } from './quotation.service';
import { ObjectId } from 'mongodb';

// DEFINE WHICH FUNCTIONS VARIOUS HTTP REQUESTS WILL BE ROUTED TO
// SELF-DOCUMENTING HTTP REQUESTS AND THEIR RETURN VALUES GIVEN BELOW

@Controller('quotations')
export class QuotationController {
  constructor(private readonly quotationService: QuotationService) {}

  @Get()
  async getAll() {
    return this.quotationService.getAllQuotations();
  }
  @Get(':quoteId')
  async getQuote(@Param('quoteId') quoteId: string) {
    return this.quotationService.getOneQuotation(new ObjectId(quoteId));
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

  @Delete(':quoteId')
  async deleteQuotation(@Param('quoteId') quoteId: string) {
    return this.quotationService.deleteQuotation(new ObjectId(quoteId));
  }
}
