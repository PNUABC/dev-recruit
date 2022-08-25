import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LogInUserDto } from './dto/login-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    // create
    @Post('/signup')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto):Promise<User>{
        return this.userService.createUser(createUserDto);
    }

    // sign in
    @Post('/signin')
    signIn(@Body() logInUserDto :LogInUserDto):Promise<String>{
        return this.userService.signIn(logInUserDto);
    }


}
