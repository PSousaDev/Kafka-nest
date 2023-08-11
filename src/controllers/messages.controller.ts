import { Controller, Body, Post } from '@nestjs/common';
import { CreateMessageDto } from '../core/dtos';
import { MessagesService } from '../use-cases/messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  async createMessage(@Body() createMessageDto: CreateMessageDto): Promise<void> {
    await this.messagesService.createMessage(createMessageDto);
  }
}