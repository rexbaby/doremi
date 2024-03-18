import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RocDate'
})
export class RocDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
