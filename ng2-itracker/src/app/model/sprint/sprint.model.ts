export class SprintModel {
    public idSprint : number;
    public idProject : number;
    public slot : number;

    constructor(idSprint : number, idProject : number, slot : number){
        this.idSprint = idSprint;
        this.idProject =  idProject;
        this.slot = slot;
    }
}