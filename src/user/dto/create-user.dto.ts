import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { LogInUserDto } from "./login_user.dto";

export class CreateUserDto extends LogInUserDto{
    @IsString()
    @IsNotEmpty()
    username: string;
}