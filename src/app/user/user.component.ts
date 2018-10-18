import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` 
  <div class="card">
    <h4>{{user.login}}</h4>
    <img class="circle-img" [src]="user.avatar_url" alt="image" width="100" height="100"/>
</div>
<br/>`
})
export class UserComponent {
  @Input()
  user: any;
}