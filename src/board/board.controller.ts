import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardService } from './board.service';
import { Board } from './interfaces/board.interface';
import { ApiCreatedResponse, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';

@Controller('board')
@ApiTags('Board')
export class BoardController {
    constructor(private boardService: BoardService) {}
    
    @Post()
    @ApiOperation({ summary: '게시글 생성', description: '게시글을 생성합니다.'})
    @ApiCreatedResponse({ description: '게시글을 생성합니다.', type: CreateBoardDto})
    async create(@Body() createBoardDto: CreateBoardDto){
        return this.boardService.create(createBoardDto);
    }
    
    @Get()
    async findAll(): Promise<Board[]> {
        return this.boardService.findAll();
    }
}
    