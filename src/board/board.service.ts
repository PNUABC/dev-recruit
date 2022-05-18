import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';

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
        // query.where('board');
        const boards = await query.getMany();
        return boards;
    }
}
