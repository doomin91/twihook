import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { DeleteBoardDto } from './dto/delete-board.dto';
import { BoardService } from './board.service';
import { Board } from './interfaces/board.interface';
import { ApiCreatedResponse, ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { UpdateBoardDto } from './dto/update-board-dto';

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
    @ApiOperation({ summary: '모든 글 조회'})
    @ApiCreatedResponse({ description: '모든 글 조회', type: CreateBoardDto})
    async findAll(): Promise<Board[]> {
        return this.boardService.findAll();
    }

    @Delete("/:id")
    @ApiOperation({ summary: '특정 글 삭제'})
    @ApiCreatedResponse({ description: '게시글을 삭제합니다.', type: DeleteBoardDto})
    async delete(@Param() deleteBoardDto: DeleteBoardDto): Promise<void>{
        return this.boardService.deleteBoard(deleteBoardDto.id)
    }

    @Patch("/:id")
    async update(@Body() updateBoardDto: UpdateBoardDto): Promise<void>{
        return this.boardService.updateBoard(updateBoardDto);
    }
}
    