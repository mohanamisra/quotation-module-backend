import { Inject, Injectable } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';

@Injectable()
export class QuotationService {
  constructor(@Inject('MONGO_DB') private readonly db: Db) {}

  async getAllQuotations() {
    return this.db.collection('quotations').find().toArray();
  }

  async create(quotation: any) {
    const result = await this.db.collection('quotations').insertOne(quotation);
  }

  async updateQuotation(id: string, updatedQuotation: any) {
    const objId = new ObjectId(id);
    return this.db.collection('quotations').updateOne({ _id: objId }, { $set: updatedQuotation });
  }
}
