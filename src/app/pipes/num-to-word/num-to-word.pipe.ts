import { Pipe, PipeTransform } from '@angular/core';

// ng g p pipes/num-to-word --flat=false --skip-tests

@Pipe({
    name: 'numToWord'
})
export class NumToWordPipe implements PipeTransform {

    public transform(num: number, capitalFirstLetter?: boolean): string | number {
        if(num < 0 || num > 10) return num;
        const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
        return capitalFirstLetter ? words[num] : words[num].toLowerCase();
    }

}
