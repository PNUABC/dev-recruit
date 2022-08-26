import { User } from "src/user/user.entity";
import { EntityRepository, Repository } from "typeorm";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";

@EntityRepository(Board)
export class BoardRepository extends Repository<Board>{
    async createBoard(createBoardDto: CreateBoardDto, user: User):Promise<Board>{
        const {companyName, jobPosition, recruitTitle, recruitDescription, companyAddress} = createBoardDto;

        const board = this.create({companyName,jobPosition, recruitTitle, recruitDescription, companyAddress, user});

        await this.save(board);
        return board;
    }
}