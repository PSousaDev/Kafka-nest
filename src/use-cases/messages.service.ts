import { Injectable } from '@nestjs/common';
import { Menssage } from '../core/entities';
import { MongoDataServices } from '../framework/mongoose/mongoose.service';
import { IDataServices } from 'src/core';
import { KafkaProducer } from '../framework/kafka/kafka.producer.service';


@Injectable()
export class CreateMessageUseCase {
  constructor(
    private readonly messagesRepository: IDataServices,
    private readonly kafkaProducer: KafkaProducer,
  ) {}

  async execute(content: string): Promise<Menssage> {
    const newMessage = await this.messagesRepository.menssage(content);
    await this.kafkaProducer.sendMessage('message.created', newMessage);
    return newMessage;
  }
}