import {Component} from '@angular/core';
import {UserService} from '../../model/user/user.service';
import {AuthenticationService} from '../../services/auth.service';
import {UserModel} from '../../model/user/user.model';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  providers:[UserService,AuthenticationService]
})

export class Login {

  public errorMsg = '';
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, private _auth:AuthenticationService, private _userservice:UserService, private _router: Router) {
    
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public login():void{
      var userForm : UserModel = new UserModel(1,'Tiago Oliveira',this.email.value
      ,this.password.value);
      if(!this._auth.login(userForm)){
            this.errorMsg = 'Failed to login';
      }
      else{
        this.errorMsg = 'Login success';
      }
  }
}
