import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTextPipe'
})
export class CustomTextPipePipe implements PipeTransform {

  transform(text: string): string {
    if(text.length > 95){
      return text.slice(0,95) + '...';
    }
    return text;
  }

}
