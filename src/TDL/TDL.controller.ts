import {Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common'
import {TDLService} from './TDL.service'
import {ApiResponse, ApiTags} from '@nestjs/swagger'
import {TDL} from './TDL.entity'
import {TDLDto} from './TDL.dto'

@Controller('tdl')
@ApiTags('tdl')
export class TDLController {
    constructor(private tdlService: TDLService){}
    @Get()
    @ApiResponse({
        status: 201,
        description: 'Tasks to do',
    })
    @ApiResponse({
        status: 404,
        description: 'No page'
    })
    getAll(): Promise<TDL[]>{
        return this.tdlService.findAll();
    }

    @Get('/:id')
    getById(@Param('id') id: number): Promise<TDL>{
        return this.tdlService.read(id)
    }

    @Post()
    create(@Body() tdlDto: TDLDto): Promise<TDL>{
        return this.tdlService.create(tdlDto);
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() tdlDto: TDLDto): Promise<TDL>{
        return this.tdlService.update(id, tdlDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: number): Promise<TDL>{
        return this.tdlService.delete(id);
    }
}
