import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { PassportModule } from '@nestjs/passport';
import * as config from 'config';
import { jwtStrategy } from './jwt.strategy';

const jwtConfig = config.get('jwt');
@Module({
  imports:[
    PassportModule.register({
    defaultStrategy:'jwt'
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET ||jwtConfig.secret,
      signOptions:{
        expiresIn: jwtConfig.expiresIn,
      }
    }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [UserController],
  providers: [UserService, jwtStrategy],
  exports:[jwtStrategy,PassportModule]
})
export class UserModule {}
