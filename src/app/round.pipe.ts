import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'roundNum' })
export class RoundPipe implements PipeTransform {
    transform(value: number, isUpper: boolean, add: number): number {
        if (isUpper) {
            return Math.ceil(value + add);

        } else {
            return Math.floor(value + add);
        }

    }
}
