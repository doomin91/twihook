import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TwitchModule } from './twitch/twitch.module';
import { ConfigModule } from './config/config.module';
import { BoardModule } from './board/board.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TwitchModule, ConfigModule, BoardModule, UsersModule],
  controllers: [],
})
export class AppModule {}
