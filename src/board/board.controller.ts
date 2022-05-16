import { Controller, Get, Param } from '@nestjs/common';
import { BoardService } from './board.service';

@Controller('board')
export class BoardController {
    constructor(private boardService: BoardService){}
    
    @Get('/:id')
    getBoardById(@Param('id') id: number){
        return this.boardService.getBoardById(id);
    }

}
