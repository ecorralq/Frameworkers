import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 2) return value;
    const resultLista = [];
    for (const canciones of value) {
      if ((canciones.TITULO.toLowerCase().indexOf(arg.toLowerCase()) > -1 )||(canciones.AUTOR.toLowerCase().indexOf(arg.toLowerCase()) > -1 )) {
        resultLista.push(canciones);
      };
    };
    return resultLista;
  }
}
