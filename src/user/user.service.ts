import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { isRFC3339 } from 'class-validator';
import { CreateUserDto } from './dto/create-user.dto';
import { LogInUserDto } from './dto/login-user.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private jwtService: JwtService
    ){}

    createUser(createUserDto: CreateUserDto):Promise<User>{
        return this.userRepository.createUser(createUserDto);
    }

    async signIn(logInUserDto :LogInUserDto):Promise<{accessToken: string}>{
        const {email, password} = logInUserDto;
        const user = await this.userRepository.findOne({email});
        if(user && (await bcrypt.compare(password, user.password) )){
            const payload = {email};
            const accessToken = await this.jwtService.sign(payload);

            return {accessToken};
        }else{
            throw new UnauthorizedException('login Failed');
        }
    }
}
