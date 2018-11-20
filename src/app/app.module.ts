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
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { ServiceModule } from "./services/service.module";
import { RoutingModule } from "./routing.module";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { TimePipe } from "./services/time.pipe";
import { NewProductComponent } from "./new-product/new-product.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { MoreInfoComponent } from "./moreInfo/moreInfo.component";
import { LoginComponent } from "./login/login.component";
import { QuestionComponent } from "./question/question.component";
import { ShowDirective } from "./show/show.directive";
import { IfDirective } from "./if/if.directive";


@NgModule({
  imports: [BrowserModule, HttpClientModule, ServiceModule, FormsModule, ReactiveFormsModule, RoutingModule],
  declarations: [AppComponent, HomeComponent,
    AboutComponent, ContactComponent, ProductListComponent,
    ProductComponent, UserListComponent, UserComponent,
    HeaderComponent, FooterComponent, ProductDetailComponent,
    TimePipe, NewProductComponent, ReactiveFormComponent, ReviewsComponent,
    MoreInfoComponent, LoginComponent, QuestionComponent, ShowDirective, IfDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }


// DI Framework.      
// var svc=new ProductService();
// var logger=new FileLogger();
// var list= new ProductListComponent(svc,logger)