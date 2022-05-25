import { CurrencyModel } from './../../../models/currency.model';
import { ChangeDetectionStrategy, Component, Input, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';

// ng g c components/gift-shop-area/currency --skip-tests

// Change Detection
// A mechanism of Angular to know when a data change might occur so Angular could update the UI.
// The change detection occur on a completion of any async operation which has been overridden by Angular Zone (DOM events, setInterval, setTimeout etc).
// It can't occur on an unsupported async operation by the Zone, such as IndexedDB callbacks.
// Whenever it occur - Angular compares all expressions currently used by any HTML Template to their previous values.
// If any expression has changed Angular updates the needed component tree (that component and all his child components).

// Change Detection Strategy
// A @Component configuration which tells Angular how to check for outside changes to @Input properties presented in the component HTML Template:
// 1. ChangeDetectionStrategy.Default (the default)
// Angular checks for outside changes to any @Input property value and inner values for objects and arrays.
// If a value or inner value changed from outside - Angular rerender that component and all his child components.
// 2. ChangeDetectionStrategy.OnPush
// Angular checks for outside changes to any @Input property value but not to inner values for objects and arrays.
// If a value (but not inner value) changed from outside - Angular rerender that component and all his child components.
// This way Angular performing less comparisons and less rerendering.
// This is for performance when many inner values are changed but we don't want Angular to work hard on searching and updating the UI.
// (changes coming from within the component due to HTML Template events such as clicks, key press etc, are always detected regardless of the strategy)
// We can tell Angular to update UI in spite of OnPush, by calling markForCheck.

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush // <-- Change detection strategy - change from Default to OnPush to see the difference.
})
export class CurrencyComponent implements OnInit, OnDestroy {

    @Input()
    public supportedCurrency: CurrencyModel;

    private timerId: number;

    public constructor(private changeDetectorRef: ChangeDetectorRef) { }

    public ngOnInit(): void {

        // Mark component as "changed" each 5sec, so UI could be updated again in spite of the OnPush above:
        this.timerId = window.setInterval(() => this.changeDetectorRef.markForCheck(), 5000);
    
    }

    public ngOnDestroy(): void {
        clearInterval(this.timerId);
    }

}
