import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from "./user/user.component";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, HomeComponent,
    AboutComponent, ContactComponent, ProductListComponent, 
    ProductComponent, UserListComponent,UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
