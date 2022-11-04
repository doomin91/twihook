import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardService } from './board.service';
import { Board } from './interfaces/board.interface';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService) {}
    
    @Post()
    async create(@Body() createBoardDto: CreateBoardDto){
        return this.boardService.create(createBoardDto);
    }
    
    @Get()
    async findAll(): Promise<Board[]> {
        return this.boardService.findAll();
    }
}
    