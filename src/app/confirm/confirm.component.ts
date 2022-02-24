import { UserdataService } from './../userdata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  uname:string="atharv2704";
  name:string="Atharv"
  constructor(private _User:UserdataService) { }
  
  ngOnInit(): void {
    this.uname=this._User.servUsername;
  }

}
