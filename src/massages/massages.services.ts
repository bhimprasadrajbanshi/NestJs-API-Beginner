import { MessageRepository } from "./massages.repository";

export class massagesService{
    massagesRepo: MessageRepository;

    constructor(){
        this.massagesRepo = new MessageRepository();
    
  }
  
findOne(id: string){
    return this.massagesRepo.findOne(id);
}

findAll(){
    return this.massagesRepo.findAll();
}
create(content:string){
    return this.massagesRepo.create(content);

}
}