import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongoDbModule } from './mongodb/mongodb.module';
import { QuotationModule } from './quotation/quotation.module';

@Module({
  imports: [ConfigModule.forRoot(), MongoDbModule, QuotationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
