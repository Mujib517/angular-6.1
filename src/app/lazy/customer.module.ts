import { NgModule } from "@angular/core";
import { CustomerComponent } from "./customer.component";
import { Route, RouterModule } from "@angular/router";

const ROUTES: Route[] = [{ path: '', component: CustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  declarations: [CustomerComponent]
})
export class CustomerModule { }