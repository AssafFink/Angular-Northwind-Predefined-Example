import { Component } from '@angular/core';
import { MonetaryService } from 'src/app/services/monetary/monetary.service';

@Component({
    selector: 'app-vat',
    templateUrl: './vat.component.html'
})
export class VatComponent {
    
    public percent = 17;
    public price = 0;
    public vat = 0;

    public constructor(private monetaryService: MonetaryService) {}

    public calc(): void {
        this.vat = this.monetaryService.getVat(this.price, this.percent);
    }

    public clear(): void {
        this.price = 0;
        this.vat = 0;
    }
}
