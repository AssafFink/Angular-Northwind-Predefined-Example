import { Component, ViewChild, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { CurrencyModel } from 'src/app/models/currency.model';

// ng g c components/gift-shop-area/gift-shop --skip-tests

@Component({
    selector: 'app-gift-shop',
    templateUrl: './gift-shop.component.html'
})
export class GiftShopComponent implements OnInit, OnDestroy {

    @ViewChild("mapPlaceholder", { read: ViewContainerRef }) // { read: ViewContainerRef } states that #placeholder is a container type for other element.
    public mapViewContainerRef: ViewContainerRef;

    @ViewChild("couponPlaceholder", { read: ViewContainerRef })
    public couponPlaceholder: ViewContainerRef;

    public bitcoin: CurrencyModel;

    private timerId: number;

    public ngOnInit(): void {
        this.bitcoin = new CurrencyModel("Bitcoin", this.fetchBitcoinValue());

        // Change inner value - won't be updated when using OnPush (unless calling changeDetectorRef.markForCheck):
        this.timerId = window.setInterval(() => this.bitcoin.value = this.fetchBitcoinValue(), 200); // Demo for event blast, e.g. server socket.io.

        // Change entire object - will be updated in spite of using OnPush:
        // this.timerId = window.setInterval(() => this.bitcoin = new CurrencyModel("Bitcoin", this.fetchBitcoinValue()), 200); // Demo for event blast, e.g. server socket.io.
    }

    // Lazy load "large" component:
    public async showMap(): Promise<void> {
        this.mapViewContainerRef.clear(); // Clear previous template.
        const { MapComponent } = await import('../map/map.component');
        this.mapViewContainerRef.createComponent(MapComponent);
    }

    // Dynamic load multiple components:
    public async createCoupon(): Promise<void> {

        const { CouponComponent } = await import('../coupon/coupon.component');
        const componentRef = this.couponPlaceholder.createComponent(CouponComponent);

        // Can send data and register events:
        const couponComponent = componentRef.instance;
        couponComponent.couponCode = Math.floor(Math.random() * 1000);
        couponComponent.fulfil.subscribe((n: number) => {
            alert(n + " Fulfilled");
            componentRef.destroy();
        });
    }

    private fetchBitcoinValue(): number {
        return 10000 + Math.random() * 1000; // Backend fetching demo.
    }

    public ngOnDestroy(): void {
        window.clearInterval(this.timerId);
    }
}
