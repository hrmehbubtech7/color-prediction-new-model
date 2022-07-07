
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';


import { ConfigModule, ConfigService } from '@nestjs/config';
import { PartiyPeriodSchema } from './schemas/parity-period.schema';

@Module({
    imports: [
        ConfigModule ,
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) =>{
                return {
                    dialect: 'postgres',
                    host: 'localhost',
                    port: 5425,
                    username: "postgres",
                    password: "postgres",
                    database: "color-game",
                    models : [PartiyPeriodSchema],
                    retryAttempts: 40,
                    retryDelay: 10000,
                    autoLoadModels: true,
                }
            }
        })
    ],
    providers: [],
    exports : []
})
export class DatabaseModule {}