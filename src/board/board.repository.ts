import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board>{
    async createBoard(createBoardDto: CreateBoardDto):Promise<Board>{
        const {companyName, recruitTitle, recruitDescription, companyAddress} = createBoardDto;

        const board = this.create({companyName, recruitTitle, recruitDescription, companyAddress});

        await this.save(board);
        return board;
    }
}