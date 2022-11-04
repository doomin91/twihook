import { Injectable } from '@nestjs/common';
import { Board } from './interfaces/board.interface';

@Injectable()
export class BoardService {
    private readonly board: Board[] = [];

    create(board: Board){
        this.board.push(board);
    }

    findAll(): Board[] {
        return this.board;
    }
}
