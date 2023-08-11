import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MenssageDocument = Menssage & Document ;
@Schema()
export class Menssage  {
  @Prop({ required: true })
  content: string;

}

export const MessageSchema = SchemaFactory.createForClass(Menssage);