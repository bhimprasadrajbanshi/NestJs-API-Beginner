import { Body, Controller, Get, Param, Post,ParseBoolPipe } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { massagesService } from './massages.services';

@Controller('massages/massages')
export class MassagesController {
    messageService:massagesService
    
    constructor(){
        this.messageService =new massagesService()
    }

    @Get()
    getallmassages(){
        return this.messageService.findAll()
    }
    
    @Get('/:id')
    getmassages(@Param('id') id:string){
     return this.messageService.findOne(id);
        
    }

    @Post()
    createmassages(@Body() body:CreateMessageDTO){
     return this.messageService.create(body.content)

    }

}
