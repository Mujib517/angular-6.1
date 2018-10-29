import { Pipe } from "@angular/core";
import * as moment from 'moment';

@Pipe({
  name: 'time'
})
export class TimePipe {
  
  transform(date: string): string {
    return moment(date).fromNow(); 
  }
}
