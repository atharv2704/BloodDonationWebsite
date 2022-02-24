import { UserdataService } from './../userdata.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string;
  password:string;
  name:string;
  age:number=0;
  gender:string="";
  phoneno:number=0;

  constructor(private _User:UserdataService, private Route:Router) { }

  ngOnInit(): void {
  }

  register(){
    console.log(this.username);
    console.log(this.password);
    if(this.username=="" || this.password=="" || this.age<=0 || this.name=="" || this.gender=="" || this.phoneno==0){
      alert("Enter Required Fields appropriately");
    }
    else{
    this._User.addUserDetails(this.username,this.password,this.phoneno);
    this.Route.navigate(['login']);
    }
  }

}
