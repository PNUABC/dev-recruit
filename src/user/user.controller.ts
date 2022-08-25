import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { LogInUserDto } from './dto/login-user.dto';
import { GetUser } from './get-user.decorator';
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
    signIn(@Body() logInUserDto :LogInUserDto):Promise<{accessToken: string}>{
        return this.userService.signIn(logInUserDto);
    }

    // test
    @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() user:User){
        console.log('user', user);
    }
    // test(@Req() req){
    //     console.log(req);
    // }

}
