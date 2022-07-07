import { Injectable } from '@nestjs/common';
import { Repository, Sequelize } from 'sequelize-typescript';
import { PartiyPeriodModel } from 'src/database/models/parity-period.model';
import { PartiyPeriodSchema } from 'src/database/schemas/parity-period.schema';
import { BaseService } from 'src/database/service/base.service';
import { CreateParityPeriodDto } from './dto/create-parity-period.dto';

@Injectable()
export class ParityPeriodService extends BaseService<
  PartiyPeriodSchema,
  PartiyPeriodModel
> {
    protected repository: Repository<PartiyPeriodSchema>;

    constructor(private sequelize : Sequelize){
        super();
        this.repository = sequelize.getRepository(PartiyPeriodSchema)
    }
    create(createParityPeriodDto  : CreateParityPeriodDto){
        return super.add(createParityPeriodDto);
    }
    findAll(){
        return super.getAll()
    }

}
