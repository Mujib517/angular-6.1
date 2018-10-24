import { Component } from "@angular/core";

@Component({
  selector:'app-header',
  template:` <header class="container">
  <nav class="navbar navbar-expand-lg bg-dark" >
     <h3 class="navbar-brand">My Products App</h3>
     <ul class="navbar-nav mr-auto">
       <li class="nav-item"><a class="nav-link" href="">Home</a></li>
       <li class="nav-item"><a class="nav-link" href="">About</a></li>
       <li class="nav-item"><a class="nav-link" href="">Products</a></li>
       <li class="nav-item"><a class="nav-link" href="">Contact</a></li>
     </ul>
   </nav>
 </header>`
})
export class HeaderComponent{}