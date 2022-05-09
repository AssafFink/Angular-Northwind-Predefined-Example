import { Component, OnInit, SimpleChanges, OnChanges, DoCheck, OnDestroy, Input, ChangeDetectionStrategy } from '@angular/core';

// ng g c components/home-area/clock

// Lifecycle Hooks: Built-in functions invoked in specific times.

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html'
})
export class ClockComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

    @Input() bla = [0, 0, 0];

    public time = "";
    public timer = 0;

    // Object has been created - DI.
    public constructor() {
        //console.log("constructor");
    }

    // Component ready for use - init it, get server data, etc'
    public ngOnInit(): void {
        //console.log("ngOnInit");
        this.time = this.getCurrentTime();
        //this.timer = window.setInterval(() => this.time = this.getCurrentTime(), 1000);
    }

    // Input properties has been changed - do some logic:
    public ngOnChanges(changes: SimpleChanges): void {
        //console.log("ngOnChanges", JSON.stringify(changes));
    }

    // Change detection mechanism kicks-in - do some logic:
    public ngDoCheck(): void {
        //console.log("ngDoCheck");
    }

    // Component is about to be destroyed - close things:
    public ngOnDestroy(): void {
        //console.log("ngOnDestroy");
        //window.clearInterval(this.timer);
    }

    private getCurrentTime(): string {
        const now = new Date();
        return now.toLocaleTimeString();
    }
}