import { SprintModel } from './../sprint/sprint.model';


export class EventModel {
    public idEvent : number;
    public description : string;

    constructor(Id : number, Name : string, description : string){
        this.idEvent = Id;
        this.description = description;
    }
}