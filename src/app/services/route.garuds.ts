import { Injectable } from "@angular/core";
import { Router, CanActivate, CanDeactivate, CanActivateChild } from "@angular/router";

@Injectable()
export class ProductRouteGaruds implements CanActivate, CanDeactivate<any>,CanActivateChild {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem("token")) return true;

    this.router.navigate(["/login"]);
    return false;
  }

  canDeactivate(): boolean {
    var result = confirm("Are you sure you want to leave without saving your changes");
    return result;
  }

  canActivateChild(): boolean {
    return true;
  }

}