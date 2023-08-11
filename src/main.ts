import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'message-service',
        brokers: ['kafka:9092'], // Use the service name defined in docker-compose.yml
      },
      consumer: {
        groupId: 'message-group',
      },
    },
  });

  await app.listen();
}
bootstrap();