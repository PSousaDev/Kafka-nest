import { Injectable } from '@nestjs/common';
import { KafkaClient, Producer, ProduceRequest } from 'kafka-node';
import { Menssage } from '../../core';

@Injectable()
export class KafkaProducer {
  private producer: Producer;
  constructor() {
    const client = new KafkaClient({ kafkaHost: 'localhost:9092' });

    this.producer = new Producer(client);
  }

  async sendMessage(topic: string, message: Menssage): Promise<void> {
    const payloads: ProduceRequest[] = [
      {
        topic,
        messages: [JSON.stringify(message)],
      },
    ];

    this.producer.send(payloads, (err, data) => {
      if (err) {
        console.error('Error sending message:', err);
      } else {
        console.log('Message sent:', data);
      }
    });
  }
}
