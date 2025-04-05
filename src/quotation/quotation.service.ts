import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class QuotationService {
  constructor(@Inject('MONGO_DB') private readonly db: Db) {}

  async getAllQuotations() {
    return this.db.collection('quotations').find().toArray();
  }

  async create(quotation: any) {
    const result = await this.db.collection('quotations').insertOne(quotation);
  }
}
