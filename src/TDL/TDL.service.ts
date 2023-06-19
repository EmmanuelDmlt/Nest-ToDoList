
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
  async read(id: number): Promise<TDL>{
    return await this.tdlRepository.findOne({
      where: {
        id,
      },
    });
  }
  async create(tdlDto: TDLDto){
    const tdlEntity = new TDL();
    tdlEntity.task = tdlDto.task;
    tdlEntity.state = tdlDto.state;
    const tdl = this.tdlRepository.create(tdlEntity);
    await this.tdlRepository.save(tdl);
    return tdl;
  }
  async update(id: number, data: Partial<TDLDto>){
    await this.tdlRepository.update({ id }, data);
    const tdl = this.tdlRepository.findOne({where: { id }});
    return tdl;
  }

  async delete(id: number){
    const tdl = await this.tdlRepository.findOne({where: {id}})
    await this.tdlRepository.delete({ id });
    return tdl;
  }
}
