import { Auth } from './auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isAuthenticated: boolean = false;
  constructor(private Auth: Auth) { 
    //this.IsAuthenticated();
  }

  // public IsAuthenticated(): boolean {
  //   if (this.Auth.isAuthenticated()) {
  //     this.isAuthenticated = true;
  //   }
  //   else {
  //     this.isAuthenticated = false;
  //   }
  //   return this.isAuthenticated;
  // }
}
