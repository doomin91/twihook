import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board-dto';

@Injectable()
export class BoardService {
    constructor(private boardRepository: BoardRepository) {}

    async create(createBoardDto: CreateBoardDto): Promise<Board>{
        return this.boardRepository.create(createBoardDto);
    }

    async findAll(): Promise<Board[]> {
        return this.boardRepository.findAll();
    }

    async deleteBoard(id: number): Promise<void> {
        const result = await this.boardRepository.delete(id);
        
        if(result.affected === 0){
            throw new HttpException('삭제하려는 게시물이 존재하지 않습니다.', HttpStatus.NOT_FOUND);
        } 

        throw new HttpException('성공적으로 처리되었습니다.', HttpStatus.OK);
    }

    async updateBoard(updateBoardDto: UpdateBoardDto): Promise<void> {
        const result = await this.boardRepository.update(updateBoardDto);

        if(result.affected === 0){
            throw new HttpException('수정하려는 게시글이 존재하지 않습니다.', HttpStatus.NOT_FOUND)
        }

        throw new HttpException('성공적으로 처리되었습니다.', HttpStatus.OK);
    }
}
