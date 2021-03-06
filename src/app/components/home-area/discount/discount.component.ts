import { Component } from '@angular/core';
import { ColorsService } from 'src/app/services/colors/colors.service';

// ng g c components/home-area/discount --skip-tests

// Attribute Directive:
// Perform some change on an element - appearance/structure/behavior

@Component({
    selector: 'app-discount',
    templateUrl: './discount.component.html',
    styleUrls: ['./discount.component.css']
})
export class DiscountComponent {

    public constructor(private colorsService: ColorsService) { }

    public classes = {
        underlined: Math.random() < 0.5,
        bolded: Math.random() < 0.5
    };

    public styles = {
        color: this.colorsService.getRandomColor(),
        fontWeight: Math.random() < 0.5 ? "bold": null
    };

}
