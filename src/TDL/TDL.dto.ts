import {ApiProperty} from '@nestjs/swagger'

export class TDLDto{
    @ApiProperty({
        required: true,
        type: 'string',
    })
    readonly task: string;

    @ApiProperty({
        required: true,
        type: 'boolean',
    })
    readonly state: boolean;
}

