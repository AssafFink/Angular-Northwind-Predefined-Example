import { Component, Input } from '@angular/core';

// ng g c components/home-area/slogan --skip-tests

// @Input:
// Variable receiving it's value from the parent component.

@Component({
    selector: 'app-slogan',
    templateUrl: './slogan.component.html',
    styleUrls: ['./slogan.component.css']
})
export class SloganComponent {

    @Input()
    public slogan: string;

}

