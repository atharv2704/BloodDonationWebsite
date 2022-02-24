import { UserdataService } from './../userdata.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  userCredentials:any[];
  passed:boolean=false;
  constructor(private _UserService:UserdataService, private Route:Router) { }

  ngOnInit(): void {
    this.userCredentials = this._UserService.userData;
  }
  directToMain(){
    this._UserService.servUsername=this.username;
    for(let i=0;i<this.userCredentials.length;i++){
      if(this.userCredentials[i].username==this.username && this.userCredentials[i].password==this.password){
        this.passed=true;
        this.Route.navigate(['main']);
      }
    }
    if(!this.passed)
      alert("Enter Valid Credentials");
  }
}
