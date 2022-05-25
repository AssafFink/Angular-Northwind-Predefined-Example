import { Component } from '@angular/core';

// ng g c components/home-area/search --skip-tests

// Data Binding:
// Property Binding: Set class field to an HTML attribute.
// Event Binding: HTML event invoking a class method.
// Two-Way Binding: Connect an input element into a class field.
// Interpolation: Display expression inside HTML Template.

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    public tooltip = "Search Entire Website";
    public textToSearch = "";

    public searchWebsite(args: Event): void {
        console.log(args);
        alert(`Searching for ${this.textToSearch}`);
        this.textToSearch = "";
    }

}
