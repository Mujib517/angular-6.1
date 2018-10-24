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
import { ProductService } from "./services/product.serivce";
import { ConsoleLogger } from "./services/console.logger";
import { FileLogger } from "./services/file.logger";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, HomeComponent,
    AboutComponent, ContactComponent, ProductListComponent,
    ProductComponent, UserListComponent, UserComponent],
  providers: [ProductService, { provide: ConsoleLogger, useClass: FileLogger }],
  bootstrap: [AppComponent]
})
export class AppModule { }


// DI Framework.      
// var svc=new ProductService();
// var logger=new FileLogger();
// var list= new ProductListComponent(svc,logger)