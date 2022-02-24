import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  public userData=[{username:"abc",password:"aaa"}];
  public phoneNo:number[];
  servUsername:string;
  constructor() {this.phoneNo=[]; }

  addUserDetails(uname:string,passw:string,pnum:number){
    if(this.checkValidPhoneNo(pnum)){
    this.userData.push({"username": uname,"password":passw});
    this.phoneNo.push(pnum);
    alert("User Added!");
    }
    else{
      alert("Enter Unique Phone Number!");
    }
  }

  checkValidPhoneNo(pnum:number){
    for(let i=0;i<this.phoneNo.length;i++){
      if(pnum==this.phoneNo[i]){
        return false;
      }
    }
    return true;
  }

}
