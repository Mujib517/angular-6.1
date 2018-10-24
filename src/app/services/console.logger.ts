import { Injectable } from "@angular/core";

// tree shaking
@Injectable()
export class ConsoleLogger {

  log(msg: any) {
    console.log(msg);
  }

  warn(msg: any) {
    console.warn(msg);
  }

  error(msg: any) {
    console.error(msg);
  }
}