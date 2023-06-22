import {IsInt, IsString} from "class-validator" ;

export class CreateMessageDTO{
    @IsString()
    content: string 
    
}