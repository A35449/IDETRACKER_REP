import { SprintModel } from './../sprint/sprint.model';


export class TrackerRecordModel {
    public idProject : number;
    public idUser : number;
    public idTask : number;
    public activityStart : Date;
    public activityEnd : Date;
    public activityTotal : number;
    public isRun: boolean;

    public name : string;
    public workingSprint: number;

    constructor(idProject : number, idUser : number,idTask : number,activityStart : Date,activityEnd : Date,activityTotal : number, isRun: boolean){
        this.idProject = idProject;
        this.idTask = idTask;
        this.idUser = idUser;
        this.activityStart = activityStart;
        this.activityEnd = activityEnd;
        this.activityTotal = activityTotal;
        this.isRun = isRun;
    }
}