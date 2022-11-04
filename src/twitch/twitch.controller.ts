import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TwitchService } from './twitch.service';
import { CreateTwitchDto } from './dto/create-twitch.dto';
import { UpdateTwitchDto } from './dto/update-twitch.dto';

@Controller('twitch')
export class TwitchController {
  constructor(private readonly twitchService: TwitchService) {}

  @Post()
  create(@Body() createTwitchDto: CreateTwitchDto) {
    return this.twitchService.create(createTwitchDto);
  }

  @Get()
  findAll() {
    return this.twitchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.twitchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTwitchDto: UpdateTwitchDto) {
    return this.twitchService.update(+id, updateTwitchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.twitchService.remove(+id);
  }
}
