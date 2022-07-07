import { AutoIncrement, Column,  Model, PrimaryKey,Table, Unique } from 'sequelize-typescript';
import { PartiyPeriodModel } from '../models/parity-period.model';

@Table({})
export class PartiyPeriodSchema
  extends Model<PartiyPeriodSchema, PartiyPeriodModel>
  implements PartiyPeriodModel
{
  @Unique
  @Column
  periodNumber: number;

  @Column
  winnerNumber: number;

  @Column
  winnerColor: string;

  @Column
  price: string;

}
