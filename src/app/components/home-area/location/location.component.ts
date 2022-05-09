import { Component, ElementRef, ViewChild } from '@angular/core';

// ng g c components/home-area/location

// Template Reference Variable
// Angular unique id for an element.

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html'
})
export class LocationComponent {

    @ViewChild("location")
    public selectRef: ElementRef<HTMLSelectElement>;
    
    public show(location: HTMLSelectElement): void {
        const selectElement = this.selectRef?.nativeElement;
        alert(`Location: ${location.value} | ${selectElement.value}`);
    }
}
