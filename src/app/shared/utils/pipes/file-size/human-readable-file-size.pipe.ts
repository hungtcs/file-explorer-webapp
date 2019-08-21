import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanReadableFileSize'
})
export class HumanReadableFileSizePipe implements PipeTransform {
  private units = ['Byte', 'KB', 'MB', 'GB', 'TB'];

  public transform(sizeInByte: number, fractionDigits: number=1): string {
    return this.calc(sizeInByte, fractionDigits);
  }

  private calc(sizeInByte: number, fractionDigits: number) {
    let humanReadableFileSize: string;
    this.units.some((unit, index) => {
      const sizeInUnit = sizeInByte / Math.pow(1024, index);
      if(sizeInUnit > 1024) {
        return false;
      } else {
        humanReadableFileSize = `${ sizeInUnit.toFixed(fractionDigits) }${ unit }`;
        return true;
      }
    });
    return humanReadableFileSize;
  }

}
