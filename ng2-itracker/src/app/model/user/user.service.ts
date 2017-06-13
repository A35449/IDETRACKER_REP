import { UserModel } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private endpoint:string = `http://localhost:8150/api/users`;
    user : UserModel = new UserModel(1,'s',"d","e")
    users : UserModel[];
    constructor (
        private http: Http
    ) {
    }

    public getUsers(){
            return this.http.get(this.endpoint)
        .map((res:Response) => res.json());
    }

    public getUserFromId(id: number){
            return this.http.get(this.endpoint + `/id/` + id)
        .map((res:Response) => res.json());
    }

    public getUserFromUsername(username: string){
            return this.http.get(this.endpoint + `/username/` + username)
        .map((res:Response) => res.json());
    }

    public getStaticUser(){
        return this.users;
    }

    public getUsersFromProject(id:number){
                    return this.http.get(this.endpoint + `/project/` + id)
        .map((res:Response) => res.json());
    }
}
