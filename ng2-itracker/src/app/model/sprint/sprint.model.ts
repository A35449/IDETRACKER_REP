export class SprintModel {
    public idSprint : number;
    public idProject : number;
    public slot : number;
    public duration : number;
    public startDate : Date; 

    constructor(idSprint : number, idProject : number, slot : number, duration : number, startDate : Date){
        this.idSprint = idSprint;
        this.idProject =  idProject;
        this.slot = slot;
        this.duration = duration;
        this.startDate = startDate;
    }
}