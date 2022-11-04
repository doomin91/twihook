import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTwitchDto } from './create-twitch.dto';

export class UpdateTwitchDto extends PartialType(CreateTwitchDto) {
    @ApiProperty({ description: 'id' })
    id!: number;

    @ApiProperty({ description: '이름'})
    name!: string;
}
