import { Module } from '@nestjs/common';
import {
  MessagesController
} from './controllers';
import { DataServicesModule} from './services'
import {MessagesService}from './use-cases/messages.service'
import { KafkaProducer } from './framework/kafka/kafka.producer.service';



@Module({
  imports: [
    DataServicesModule],
  controllers: [MessagesController],
  providers: [MessagesService,KafkaProducer],
})
export class AppModule {}