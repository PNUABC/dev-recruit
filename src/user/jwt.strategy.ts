import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as config from 'config';
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){
        super({
            secretOrKey: process.env.JWT_SECRET || config.get('jwt.secret'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })
    }

    async validate(payload) {
        const {email} = payload;
        const user:User = await this.userRepository.findOne({email});
        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }
}