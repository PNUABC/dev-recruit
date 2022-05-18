import { Controller, Get, Param } from '@nestjs/common';
import { Board } from './board.entity';
import { BoardService } from './board.service';

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
}
