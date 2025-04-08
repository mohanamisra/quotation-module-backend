import { Inject, Injectable } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';

// THE ACTUAL TASKS PERFORMED UNDER THE HOOD TO SERVICE HTTP REQUESTS
/* CURRENTLY SUPPORTED:
 * - getting all quotes
 * - getting one single quote by ID
 * - creating a new quote with the quote body
 * - updating an existing quote with the quote ID and the updated quote body (REMEMBER TO REMOVE _id ATTRIBUTE WHEN PASSING UPDATED QUOTE BODY)
 */

@Injectable()
export class QuotationService {
  constructor(@Inject('MONGO_DB') private readonly db: Db) {}

  async getAllQuotations() {
    return this.db.collection('quotations').find().toArray();
  }

  async getOneQuotation(quoteId: ObjectId) {
    return this.db.collection('quotations').findOne({ _id: quoteId });
  }

  async create(quotation: any) {
    const result = await this.db.collection('quotations').insertOne(quotation);
    return result.insertedId;
  }

  async updateQuotation(id: string, updatedQuotation: any) {
    const objId = new ObjectId(id);
    return this.db
      .collection('quotations')
      .updateOne({ _id: objId }, { $set: updatedQuotation });
  }

  async deleteQuotation(quoteId: ObjectId) {
    return this.db.collection('quotations').deleteOne({ _id: quoteId });
  }
}
