import { NgModule } from "@angular/core";
import { ProductService } from "./product.serivce";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { UserService } from "./user.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ProductInterceptor } from "./product.interceptor";

@NgModule({
  providers: [ProductService, UserService, { provide: ConsoleLogger, useClass: FileLogger },
    { provide: HTTP_INTERCEPTORS, useClass: ProductInterceptor, multi: true }],
})
export class ServiceModule { }