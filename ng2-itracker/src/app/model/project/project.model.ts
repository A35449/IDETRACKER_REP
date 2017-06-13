import { SprintModel } from './../sprint/sprint.model';


export class ProjectModel {
    public idProject : number;
    public name : string;
    public workingSprint: number;

    constructor(Id : number, Name : string, workingSprint : number){
        this.idProject = Id;
        this.name = Name;
        this.workingSprint = workingSprint;
    }
}