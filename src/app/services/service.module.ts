import { NgModule } from "@angular/core";
import { ProductService } from "./product.serivce";
import { ConsoleLogger } from "./console.logger";
import { FileLogger } from "./file.logger";

@NgModule({
  providers: [ProductService, { provide: ConsoleLogger, useClass: FileLogger }],
})
export class ServiceModule { }