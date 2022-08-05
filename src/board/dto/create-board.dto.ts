import { IsNotEmpty } from "class-validator";

export class CreateBoardDto{
    @IsNotEmpty()
    companyName: string;
    
    @IsNotEmpty()
    jobPosition: string;
    
    @IsNotEmpty()
    recruitTitle: string;
    
    @IsNotEmpty()
    recruitDescription: string;
    
    @IsNotEmpty()
    companyAddress: string;

    
    // @IsNotEmpty()
    // expireDate: Date;

}