import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatvalue'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string | null {
    const suffixes = ["", "k", "M", "B", "T"];
    const suffixNum = Math.floor(("" + value).length / 3);
    let shortValue = parseFloat(
      (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toFixed(1)
    );
    if (shortValue % 1 !== 0) {
      shortValue = parseFloat(shortValue.toFixed(1));
    }
    return shortValue + suffixes[suffixNum];
  }

}
