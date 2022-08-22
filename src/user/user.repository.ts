import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    async createUser(createUserDto: CreateUserDto):Promise<User>{
        const {email, password, username} = createUserDto;
        const user = this.create({email: email, password:password, username: username});
        await this.save(user);
        return user;
    }
}