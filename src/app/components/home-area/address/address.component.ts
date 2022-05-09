import { ColorsService } from './../../../services/colors/colors.service';
import { Component, OnInit } from '@angular/core';

// ng g c components/home-area/address

// DI

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

    public bg: string;

    public constructor(private colorsService: ColorsService) { }

    public ngOnInit(): void {
        this.bg = this.colorsService.getRandomColor();
    }

}
