import { UserModel } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor (
        private http: Http
    ) {}

    public getUsers(){
            return this.http.get(`http://localhost:8150/api/users`)
        .map((res:Response) => res.json());
    }

    public getUserFromId(id: number){
            return this.http.get(`http://localhost:8150/api/users/id/` + id)
        .map((res:Response) => res.json());
    }

    public getUserFromUsername(username: string){
            return this.http.get(`http://localhost:8150/api/users/username/` + username)
        .map((res:Response) => res.json());
    }
}
