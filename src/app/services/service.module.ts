import { NgModule } from "@angular/core";
import { ProductService } from "./product.serivce";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";
import { UserService } from "./user.service";

@NgModule({
  providers: [ProductService, UserService, { provide: ConsoleLogger, useClass: FileLogger }],
})
export class ServiceModule { }