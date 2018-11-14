import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { MoreInfoComponent } from "./moreInfo/moreInfo.component";
import { LoginComponent } from "./login/login.component";
import { ProductRouteGaruds } from "./services/route.garuds";
import { ProductService } from "./services/product.serivce";


const CHILD_ROUTES: Route[] = [
  { path: 'reviews', component: ReviewsComponent },
  { path: 'more', component: MoreInfoComponent },
  { path: '**', redirectTo: 'reviews' }
];


const ROUTES: Route[] = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent},
{ path: 'contact', component: ContactComponent  },
{ path: 'products', component: ProductListComponent, canActivate: [ProductRouteGaruds] },
{ path: 'login', component: LoginComponent },
{ path: 'products/new', component: NewProductComponent },
{ path: 'products/reactive-form', component: ReactiveFormComponent },
{ path: 'products/:id', component: ProductDetailComponent, children: CHILD_ROUTES },
{ path: '**', redirectTo: '' }
];

//route gaurds
// canActivate, canDeactivate, canLoad, canActivateChild, resolve

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  providers: [ProductRouteGaruds],
  exports: [RouterModule]
})
export class RoutingModule { }