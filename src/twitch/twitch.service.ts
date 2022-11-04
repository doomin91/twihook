import { Injectable } from '@nestjs/common';
import { CreateTwitchDto } from './dto/create-twitch.dto';
import { UpdateTwitchDto } from './dto/update-twitch.dto';

@Injectable()
export class TwitchService {
  create(createTwitchDto: CreateTwitchDto) {
    return 'This action adds a new twitch';
  }

  findAll() {
    return `This action returns all twitch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} twitch`;
  }

  update(id: number, updateTwitchDto: UpdateTwitchDto) {
    return `This action updates a #${id} twitch`;
  }

  remove(id: number) {
    return `This action removes a #${id} twitch`;
  }
}
