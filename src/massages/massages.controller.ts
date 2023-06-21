import { Body, Controller, Get, Param, Post,ParseBoolPipe } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

@Controller('massages/massages')
export class MassagesController {
    
    @Get()
    getallmassages(){
        console.log('list massages')
    }
    
    @Get('/:id')
    getmassages(@Param('id', ParseBoolPipe) id:string){
        console.log(id)
    }

    @Post()
    createmassages(@Body() body:CreateMessageDTO){
        console.log(CreateMessageDTO)
        console.log(body.content)
    }

}
