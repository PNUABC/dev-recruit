import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService){}
    
    @Get('/:id')
    getBoardById(@Param('id') id: number){
        return this.boardService.getBoardById(id);
    }

    @Get()
    getAllBoards():Promise<Board[]>{
        return this.boardService.getAllBoards();
    }

    @Post()
    createBoard(
        @Body() CreateBoardDto: CreateBoardDto
    ):Promise<Board>{
        return this.boardService.createBorad(CreateBoardDto);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: number): Promise<void>{
        return this.boardService.deleteBoard(id);
    }

    @Patch('/:id/recruitDescription')
    updateBoardRecruitDescription(@Param('id') id: number, @Body('recruitDescription') recruitDescription: string){
        return this.boardService.updateBoard(id, recruitDescription);
    }
}
