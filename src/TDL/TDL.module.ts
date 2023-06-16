import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TDLService } from './TDL.service';
import { TDLController } from './TDL.controller';
import { TDL } from './TDL.entity';

@Module({
    imports: [TypeOrmModule.forFeature([TDL])],
    providers: [TDLService],
    controllers: [TDLController],
  })
  export class TDLModule {}