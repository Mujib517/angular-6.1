import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  template: `
    <div class="container">
      <h1>User List</h1>
      <div *ngFor="let user of users">
        <div class="card">
          <h4>{{user.login}}</h4>
          <img class="img-thumbnail rounded" [src]="user.avatar_url" alt="image" width="150" height="120"/>
        </div>
      </div>
    </div>
  
  `
})
export class UserListComponent {
  users: any;

  constructor(http: HttpClient) {
    http.get("https://api.github.com/users")
      .subscribe(res => {
        this.users = res;
      });
  }
}
