import { Menssage } from '../entities';
import { IGenericRepository } from './generic-repository.abstracts';

export abstract class IDataServices {
  abstract menssage: IGenericRepository<Menssage>;

}