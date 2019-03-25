import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desCorta'
})
export class DesCortaPipe implements PipeTransform {

  transform(value: string): any {
    return value.slice(0,99);
  }

}
