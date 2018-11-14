import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class ProductRouteGaruds implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    console.log("inside gaurd");
    if (localStorage.getItem("token")) return true;

    this.router.navigate(["/login"]);
    return false;
  }

}