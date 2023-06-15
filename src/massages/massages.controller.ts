import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('massages/massages')
export class MassagesController {
    
    @Get()
    getallmassages(){
        console.log('list massages')
    }
    
    @Get('/:id')
    getmassages(@Param('id') id:string){
        console.log(id)
    }

    @Post()
    createmassages(@Body() body:any){
        console.log(body)
    }

}
