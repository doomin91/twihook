import { Injectable, Inject } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
    constructor(private boardRepository: BoardRepository) {}

    async create(createBoardDto: CreateBoardDto): Promise<Board>{
        return this.boardRepository.create(createBoardDto);
    }

    async findAll(): Promise<Board[]> {
        return this.boardRepository.findAll();
    }
}
