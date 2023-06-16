
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TDL } from './TDL.entity';
import { TDLDto } from './TDL.dto';


@Injectable()
export class TDLService {
  constructor(
    @InjectRepository(TDL)
    private tdlRepository: Repository<TDL>,
  ) {}

  async findAll(): Promise<TDL[]> {
    return await this.tdlRepository.find();
  }

  async create(tdlDto: TDLDto){
    const tdlEntity = new TDL();
    tdlEntity.task = tdlDto.task;
    tdlEntity.state = tdlDto.state;
    const tdl = this.tdlRepository.create(tdlEntity);
    await this.tdlRepository.save(tdl);
    return tdl;


  }
  
  findOne(id: number): Promise<TDL | null> {
    return this.tdlRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.tdlRepository.delete(id);
  }
}
