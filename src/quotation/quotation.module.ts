import { Module } from '@nestjs/common';
import { QuotationService } from './quotation.service';
import { QuotationController } from './quotation.controller';
import { MongoDbModule } from '../mongodb/mongodb.module';

// THIS MODULE IS CONCERNED WITH CREATING AND DELIVERING THE API ENDPOINTS WITH RESPECT TO THE QUOTATIONS
// YOU ONLY NEED ACCESS TO THE DATABASE IN THIS MODULE

@Module({
  imports: [MongoDbModule],
  controllers: [QuotationController],
  providers: [QuotationService],
})
export class QuotationModule {}
