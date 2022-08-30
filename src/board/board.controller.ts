import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/get-user.decorator';
import { User } from 'src/user/user.entity';
import { Board } from './board.entity';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Controller('board')
@UseGuards(AuthGuard())
export class BoardController {
    private logger = new Logger('Boards');
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
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() CreateBoardDto: CreateBoardDto,
        @GetUser() user:User
    ):Promise<Board>{
        console.log('user', user);
        // this.logger.verbose(`User ${user.username} creating a new board. Payload: ${JSON.stringify(CreateBoardDto)}`);
        return this.boardService.createBorad(CreateBoardDto, user);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: number): Promise<void>{
        return this.boardService.deleteBoard(id);
    }

    @Patch('/:id')
    updateBoard(@Param('id') id: number, @Body() updateData: UpdateBoardDto){
        return this.boardService.updateBoard(id, updateData);
    }
}
