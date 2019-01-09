import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
   name: 'TempConverter'
})
export class TempConverterPipe implements PipeTransform {
   transform(value: number, unit: string) {
       if(value && !isNaN(value)) {
           if (unit === 'C') {
               var temperature = (value - 20) /1.8 ;
               return temperature.toFixed(2);
           } else if (unit === 'F'){
               var temperature = (value * 1.8 ) + 20
               return temperature.toFixed(2);
           }
       }
       return;
   }
}