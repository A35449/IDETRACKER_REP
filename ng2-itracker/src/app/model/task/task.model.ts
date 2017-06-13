export class TaskModel {
    public idUser : number;
    public idTask : number;
    public idSprint : number;
    public idTaskState : number;
    public name : string;
    public description : string;
    public lastActivity : string;
    public hours : number;

    constructor(idUser : number, idTask : number, idSprint: number, idTaskState : number , description: string ,lastActivity : string , hours : number){
        this.idUser = idUser; 
        this.idTask =  idTask;
        this.idSprint = idSprint;
        this.idTaskState = idTaskState;
        this.name = name;
        this.description = description;
        this.lastActivity = lastActivity;
        this.hours = hours;
    }
}