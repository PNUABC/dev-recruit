import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository:BoardRepository
    ){}

    async getBoardById(id: number){
        const found = await this.boardRepository.findOne(id);
        if(!found){
            throw new NotFoundException(`Can't find board with id ${id}`);
        }

        return found;
    }

    async getAllBoards():Promise<Board[]>{
        const query = this.boardRepository.createQueryBuilder('board');
        const boards = await query.getMany();
        return boards;
    }

    createBorad(createBoardDto: CreateBoardDto):Promise<Board>{
        return this.boardRepository.createBoard(createBoardDto);
    }

    async deleteBoard(id:number): Promise<void>{
        const result = await this.boardRepository.delete(id);
        if(result.affected==0){
            throw new NotFoundException(`Can't find board id : ${id}`);
        }
    }

    async updateBoard(id:number, updateData: UpdateBoardDto) :Promise<Board>{
        // const board = await this.getBoardById(id);
        await this.boardRepository.update(id, updateData);
        return await this.getBoardById(id);
    }
}
