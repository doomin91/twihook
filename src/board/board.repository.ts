import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board-dto';

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

    async delete(id: number): Promise<DeleteResult>{
        return this.boardRepository.delete(id);
    }

    async update(updateBoardDto: UpdateBoardDto): Promise<UpdateResult>{
        const {id, title, subject} = updateBoardDto;
        const update = await this.boardRepository.update(id, { title: title, subject: subject});
        return update
    }
}

