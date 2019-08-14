import moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'momentFormat',
})
export class FormatPipe implements PipeTransform {

  public transform(value: number | string | Date, format: string): string {
    return moment(value).format(format);
  }

}
