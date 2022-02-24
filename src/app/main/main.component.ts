import { Router } from '@angular/router';
import { EligibilityService } from './../eligibility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  criterias:any[]=[];
  confirmedConditions:any[]=[];
  constructor(private _Eligible:EligibilityService,private Route:Router) { }

  ngOnInit(): void {
    this.criterias=this._Eligible.criteria;
  }
  
  clicked(criteriaConfirmed:string){
    this.confirmedConditions.push(criteriaConfirmed);
    console.log(this.confirmedConditions);
  }
  
  checkCriteria(){
    if(this.confirmedConditions.length>=4){
      this.Route.navigate(['confirm']);
    }
    else{
      alert("You are not Eligible to Donate Blood!");
      this.confirmedConditions=[];
      console.log(this.confirmedConditions);
    }
  }

}
