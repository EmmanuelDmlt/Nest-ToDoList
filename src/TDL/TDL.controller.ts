import {Controller, Get, Post, Body} from '@nestjs/common'
import {TDLService} from './TDL.service'
import {TDL} from './TDL.entity'
import {TDLDto} from './TDL.dto'

@Controller('TDL')
export class TDLController {
    constructor(private tdlService: TDLService){}

    @Get()
    getAll(): Promise<TDL[]>{
        return this.tdlService.findAll();
    }
    @Post
    create(@Body tdlDto: TDLDto): Promise<TDL>{
        return this.tdlService.create(tdlDto);
    }
}
