import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardRepository {
    constructor(
        @Inject('BOARD_REPOSITORY')
        private boardRepository: Repository<Board>,
    ) {}

    async create(createBoardDto: CreateBoardDto){
        const { title, subject } = createBoardDto;

        const board = this.boardRepository.create({
            title,
            subject
        })

        await this.boardRepository.save(board);
        return board;
    }

    async findAll(): Promise<Board[]> {
        return this.boardRepository.find();
    }
}
