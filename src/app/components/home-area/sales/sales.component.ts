import { Component } from '@angular/core';

// ng g c components/home-area/sales --skip-tests

// Structural Directive:
// Adds or Removes elements from the DOM.

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html'
})
export class SalesComponent {

    public weekendSaleItem = "Pizza";
    public totalItemsOnSale = 5;

    public isWeekend(): boolean {
        const now = new Date();
        const dayOfWeek = now.getDay() + 1;
        return dayOfWeek >= 6;
    }

}
