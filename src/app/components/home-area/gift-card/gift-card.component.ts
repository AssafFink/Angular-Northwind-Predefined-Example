import { Component } from '@angular/core';

// ng g c components/home-area/gift-card

// Pipe:
// Perform some change on an interpolation value.

@Component({
    selector: 'app-gift-card',
    templateUrl: './gift-card.component.html'
})
export class GiftCardComponent {
    public amount = 50;
    public time = new Date();
    public minItems = 5;
}
