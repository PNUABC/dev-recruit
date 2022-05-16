import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
    constructor(
        private boardRepository:BoardRepository
    ){}

    async getBoardById(id: number){
        const found = await this.boardRepository.findOne(id);
        if(!found){
            throw new NotFoundException(`Can't find board with id ${id}`);
        }

        return found;
    }
}
