export class UserModel {
    public idUser : number;
    public username : string;
    public password : string;
    public email : string;

    constructor(idUser : number, username : string, email: string, password : string){
        this.idUser = idUser;
        this.username =  username;
        this.password = password;
        this.email = email;
    }
}