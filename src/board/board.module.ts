import { Module, ValidationPipe } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BoardController } from './board.controller';
import { boardProviders } from './board.providers';
import { BoardRepository } from './board.repository';
import { BoardService } from './board.service';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [DatabaseModule],      // 싱글톤으로 다른 `모듈`을 가져온다.
  controllers: [BoardController], // 인스턴스화 해야하는 해당 모듈에 정의된 컨트롤러
  providers: [                    // Nest Injector에 의해 인스턴스화 되고 해당 모듈에서 사용할 provider
    BoardService, 
    BoardRepository,
    ...boardProviders, 
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    }
  ],                              
  exports: []                     // providers에서 제공하는 provider를 다른 모듈에서 사용 할 수 있도록 함, providers에 선언되어야함
})
export class BoardModule {}
