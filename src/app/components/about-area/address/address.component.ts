import { ColorsService } from '../../../services/colors/colors.service';
import { Component, OnInit } from '@angular/core';

// ng g c components/home-area/address --skip-tests --skip-tests

// DI

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

    public backColor: string;

    public constructor(private colorsService: ColorsService) { }

    public ngOnInit(): void {
        this.backColor = this.colorsService.getRandomColor();
    }

}
