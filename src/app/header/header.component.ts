import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-header',
  template: ` <header class="container">
  <nav class="navbar navbar-expand-lg bg-dark" >
     <h3 class="navbar-brand">My Products App</h3>
     <ul class="navbar-nav mr-auto">
       <li class="nav-item"><a class="nav-link" routerLink="/">Home</a></li>
       <li class="nav-item"><a class="nav-link" routerLink="/about">About</a></li>
       <li class="nav-item"><a class="nav-link" routerLink="/products">Products</a></li>
       <li class="nav-item"><a class="nav-link" routerLink="/contact">Contact</a></li>
     </ul>
     <button routerLink="/login" class="btn btn-sm btn-success">Login</button>
     &nbsp;
     <button class="btn btn-sm btn-success" (click)="onLogout()">Logout</button>
   </nav>
 </header>`
})
export class HeaderComponent {

  isAuthenticated: boolean;

  constructor(private router: Router, private userSvc: UserService) {
    this.isAuthenticated = this.userSvc.isAuthenticated();
  }

  onLogout() {
    this.userSvc.logout();
    this.router.navigate(["/login"]);
  }
}