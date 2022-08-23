import { IsEmail, IsNotEmpty } from "class-validator";

export class LogInUserDto{
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;
}