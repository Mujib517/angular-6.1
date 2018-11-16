import { Component } from "@angular/core";
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';
import { User } from "../models/user.model";

@Component({
  template: `<h1>Login</h1>

    <div class="col-md-5">
      <div *ngIf="error" class="alert alert-danger">Wrong username or password</div>

      <div class="form-group">
        <input type="text" placeholder="Username" class="form-control" [(ngModel)]="user.username"/>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" class="form-control" [(ngModel)]="user.password"/>
      </div>
      <div class="form-group">
        <button class="btn btn-success" (click)="onLogin()">Login</button>
      </div>
    </div>
  
  `
})
export class LoginComponent {

  user: User = new User();
  error: boolean = false;

  constructor(private userSvc: UserService, private router: Router) { }

  onLogin() {
    this.userSvc.login(this.user)
      .subscribe(
        res => {
          this.error = false;
          this.userSvc.saveToken(res.token);
          this.router.navigate(["/products"]);
        },
        err => this.error = true
      );
  }
}