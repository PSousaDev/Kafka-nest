import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../core';
import { MongoGenericRepository } from './mongoose-generic-repository';
import {
  MenssageDocument,Menssage
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  menssage: MongoGenericRepository<Menssage>;

  constructor(
    @InjectModel(Menssage.name)
    private MenssageRepository: Model<MenssageDocument>,
   
  ) {}

  onApplicationBootstrap() {
    this.menssage = new MongoGenericRepository<Menssage>(this.MenssageRepository);
  }
}