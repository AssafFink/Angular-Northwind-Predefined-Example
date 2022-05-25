import { Component, EventEmitter } from '@angular/core';

// ng g c components/gift-shop-area/coupon --skip-import --skip-tests

// Lazy Loading component.
// Suitable for on-demand dynamic loading.

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html'
})
export class CouponComponent {

    public couponCode: number;

    public fulfil = new EventEmitter<number>();

    public fulfilCoupon(): void {
        this.fulfil.emit(this.couponCode);
    }

}
