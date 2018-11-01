import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";

const ROUTES: Route[] = [{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'products', component: ProductListComponent },
{ path: 'products/new', component: NewProductComponent },
{ path: 'products/reactive-form', component: ReactiveFormComponent },
{ path: 'products/:id', component: ProductDetailComponent },
{ path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule { }