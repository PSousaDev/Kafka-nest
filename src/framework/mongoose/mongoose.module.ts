import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../core';
import { DATA_BASE_CONFIGURATION } from '../../configuration';
import {
    MessageSchema,Menssage
} from './model';
import { MongoDataServices } from './mongoose.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Menssage.name, schema: MessageSchema },

    ]),
    MongooseModule.forRoot(DATA_BASE_CONFIGURATION.mongoConnectionString),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}