import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'roundNum',
})
export class RoundPipe implements PipeTransform {
    transform(value: number): number {
        return Math.round(value * 100) / 100;
    }

}
