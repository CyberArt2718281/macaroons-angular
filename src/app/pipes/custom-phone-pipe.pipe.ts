import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPhonePipe',
})
export class CustomPhonePipePipe implements PipeTransform {
  transform(phone: string): string {
    if (!phone || phone.length !== 12) {
      return phone;
    }

    return `+${phone.slice(0, 3)} (${phone.slice(3, 5)}) ${phone.slice(
      5,
      8
    )}-${phone.slice(8, 10)}-${phone.slice(10, 12)}`;
  }
}
