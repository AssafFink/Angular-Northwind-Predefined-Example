import { Component, NgZone, OnInit } from '@angular/core';

// ng g c components/gift-shop-area/shoppers --skip-tests

// Zones
// An execution context. 
// It is a patch script that overrides browser async functions like DOM events (addEventListener), setInterval, setTimeout, AJAX requests, WebSocket requests and more.
// Zone enables the execution of code before and after any async operation.
// Using zones Angular knows when browser async functions completes and thus data might be updated.
// This way Angular kicks-in the change detection mechanism for checking if a UI update should occur.
// We can run our async code outside of Angular zone, thus no change detection will occur.
// This suitable for many changes seldom needed to be detected. 

@Component({
    selector: 'app-shoppers',
    templateUrl: './shoppers.component.html',
    styleUrls: ['./shoppers.component.css']
})
export class ShoppersComponent implements OnInit {

    public amount: number = this.fetchShoppersAmount();

//    public constructor(private ngZone: NgZone) { }

    public ngOnInit(): void {

        // Run code inside Angular zone (default execution):
        // setInterval(() => this.amount = this.fetchShoppersAmount(), 200);

        // Run code outside Angular zone:
        // this.ngZone.runOutsideAngular(() => {

        //     // UI won't be rendered:
        //     setInterval(() => this.amount = this.fetchShoppersAmount(), 200); // Demo for event blast, e.g. server socket.io.

        //     // Return back to Angular zone - UI will be rendered:
        //     setInterval(() => this.ngZone.run(() => { }), 3000);

        // });

    }

    private fetchShoppersAmount(): number {
        return 500 + Math.floor(Math.random() * 20); // Backend fetching demo.
    }

}
