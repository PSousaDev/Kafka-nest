import { Module } from '@nestjs/common';
import { MongoDataServicesModule } from '../framework/mongoose/mongoose.module';

@Module({
  imports: [MongoDataServicesModule],
  exports: [MongoDataServicesModule],
})
export class DataServicesModule {}