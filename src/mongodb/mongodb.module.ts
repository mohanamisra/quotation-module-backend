import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: 'MONGO_DB',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const username = configService.get<string>('DATABASE_USER');
        const password = configService.get<string>('DATABASE_PASSWORD');
        const uri = `mongodb+srv://${username}:${password}@cluster0.z6jhhex.mongodb.net/?appName=Cluster0`;

        const client = new MongoClient(uri);
        await client.connect();
        return client.db('quotation_module');
      },
    },
    ConfigService,
  ],
  exports: ['MONGO_DB'],
})
export class MongoDbModule {}
