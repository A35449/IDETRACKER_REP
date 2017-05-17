import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {UserModel} from '../model/user/user.model';

@Injectable()
export class AuthenticationService {

  public users : UserModel[] = [
      new UserModel(1,'Tiago Oliveira', 'tiago.oliveira@email.com','bios')
  ];

  constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }
 
  login(user:UserModel){
    debugger;
    var authenticatedUser = this.users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.username); 
      this._router.navigate(['main']);     
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  } 
}