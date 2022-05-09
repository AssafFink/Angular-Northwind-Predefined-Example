import { Pipe, PipeTransform } from '@angular/core';

// ng g p pipes/num-to-word --flat=false

@Pipe({
    name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {

    public transform(num: number, lowercase?: boolean): string {
        const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
        return lowercase ? words[num].toLowerCase() : words[num];
    }

}
