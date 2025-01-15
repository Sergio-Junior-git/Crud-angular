import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: false
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Endividado' : return 'code';
      case 'Limpo' : return 'terminal';
    }
    return 'sentiment neutral';
  }

}
