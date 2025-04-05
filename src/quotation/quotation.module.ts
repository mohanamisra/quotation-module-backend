import { Module } from '@nestjs/common';
import { QuotationService } from './quotation.service';
import { QuotationController } from './quotation.controller';
import { MongoDbModule } from '../mongodb/mongodb.module';

@Module({
  imports: [MongoDbModule],
  controllers: [QuotationController],
  providers: [QuotationService],
})
export class QuotationModule {}
