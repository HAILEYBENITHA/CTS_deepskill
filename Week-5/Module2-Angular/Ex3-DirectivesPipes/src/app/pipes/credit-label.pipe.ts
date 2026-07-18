import { Pipe, PipeTransform } from '@angular/core';

// Custom creditLabel Pipe: transforms a credits number into a human-readable
// string. 1 -> '1 Credit', 2+ -> '2 Credits', null/0 -> 'No Credits'.
@Pipe({
  name: 'creditLabel',
  standalone: true,
  pure: true
})
export class CreditLabelPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || value === 0) {
      return 'No Credits';
    }
    return value === 1 ? '1 Credit' : `${value} Credits`;
  }
}
