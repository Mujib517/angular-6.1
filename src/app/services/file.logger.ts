import { Injectable } from "@angular/core";

@Injectable()
export class FileLogger {
  log(msg: any) {
    console.log("File :", msg);
  }

  warn(msg: any) {
    console.warn("File :", msg);
  }

  error(msg: any) {
    console.error("File :", msg);
  }
}