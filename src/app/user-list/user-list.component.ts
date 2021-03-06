import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  template: `
    <div class="container">
      <h1>User List</h1>
        <app-user *ngFor="let u of users" [user]="u"></app-user>
    </div>
  `
})
export class UserListComponent {
  users: any;

  constructor(http: HttpClient) {
    var obs = http.get("https://api.github.com/users");
    obs.subscribe(res => this.users = res, err => console.log(err), () => console.log("COmpleted"));
  }
}
