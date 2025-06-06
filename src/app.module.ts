import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongoDbModule } from './mongodb/mongodb.module';
import { QuotationModule } from './quotation/quotation.module';
import { CurrencyModule } from './currency/currency.module';

// CHECK THAT ALL MODULES REQUIRED IN THE OVERALL BACKEND GET IMPORTED HERE

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongoDbModule,
    QuotationModule,
    CurrencyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
