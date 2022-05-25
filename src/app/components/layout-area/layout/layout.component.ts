import { Component, ViewChild, ElementRef, AfterViewInit, DoCheck, NgZone } from '@angular/core';

//ng g c components/layout-area/layout

// Zones
// An execution context. 
// It is a patch script that overrides browser async functions like DOM events (addEventListener), setInterval, setTimeout, AJAX requests, WebSocket requests and more.
// Zone enables the execution of code before and after any async operation.
// Using zones Angular knows when browser async functions completes and thus data might be updated.
// This way Angular kicks-in the change detection mechanism for checking if a UI update should occur.
// We can run our async code outside of Angular zone, thus no change detection will occur.
// This suitable for many changes seldom needed to be detected. 

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit, DoCheck {

    @ViewChild("layoutDiv")
    public divRef: ElementRef<HTMLDivElement>;

    private heatMap: { x: number, y: number }[] = [];

    public constructor(private ngZone: NgZone) { }

    public ngAfterViewInit(): void {

        const divElement = this.divRef.nativeElement;

        // Run code outside Angular zone:
        this.ngZone.runOutsideAngular(() => divElement.addEventListener("mousemove", (args: MouseEvent) => this.trackMouse(args)));

    }

    private trackMouse(args: MouseEvent): void {
        const p = { x: args.clientX, y: args.clientY };
        this.heatMap.push(p);
        console.log(p);
        if (this.heatMap.length === 500) {
            console.log("----------------------------------------")
            console.log("Sending heat map to statistics server...");
            console.log("----------------------------------------")
            this.heatMap = [];
        }
    }

    public ngDoCheck(): void {
        console.log("Layout DoCheck...");
    }

}
