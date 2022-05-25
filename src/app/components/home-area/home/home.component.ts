import { Component } from '@angular/core';

// ng g c components/home-area/home --skip-tests

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent {

    public display(result: string): void {
        alert("Survey Result: " + result);
    }

}
