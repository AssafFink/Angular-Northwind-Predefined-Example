import { Component, OnInit, SimpleChanges, OnChanges, DoCheck, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';

// ng g c components/home-area/clock --skip-tests

// Lifecycle Hooks: Built-in functions invoked in specific times.

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html'
})
export class ClockComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

    public time: string;
    public timerId: number;

    // Object has been created - DI.
    public constructor() {
        //console.log("constructor");
    }

    // Component ready for use - init it, get server data, etc'
    public ngOnInit(): void {
        //console.log("ngOnInit");
        this.time = this.getCurrentTime();
        this.timerId = window.setInterval(() => this.time = this.getCurrentTime(), 1000);
    }

    // @Input properties has been directly changed (not an @Input object/array inner data) - do some logic:
    public ngOnChanges(changes: SimpleChanges): void {
        //console.log("ngOnChanges", JSON.stringify(changes));
    }

    // Change detection mechanism kicks-in due to async completion on this or any other running (visible) components - do some logic:
    public ngDoCheck(): void {
        console.log("clock ngDoCheck");
    }

    // Component is about to be destroyed - close things:
    public ngOnDestroy(): void {
        //console.log("ngOnDestroy");
        window.clearInterval(this.timerId);
    }

    private getCurrentTime(): string {
        const now = new Date();
        return now.toLocaleTimeString();
    }
}