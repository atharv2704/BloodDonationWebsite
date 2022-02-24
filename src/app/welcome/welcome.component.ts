import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private Route:Router) { }

  ngOnInit(): void {
  }

  registrationNavigation(){
    this.Route.navigate(['register']);
  }
  loginNavigation(){
    this.Route.navigate(['login']);
  }
}
