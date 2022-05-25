import { Injectable } from '@angular/core';

// ng g s services/monetary --flat=false --skip-tests

@Injectable({
    providedIn: 'root'
})
export class MonetaryService {

    public getVat(price: number, percent: number): number {
        return price * percent / 100;
    }

    public getVatAsync(price: number, percent: number): Promise<number> {
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(price * percent / 100);
            }, 1000); // Jasmine has a default 5sec timeout before test fail.
        });
    }

}
