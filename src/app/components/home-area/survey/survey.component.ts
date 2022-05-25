import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// ng g c components/home-area/survey --skip-tests

// @Output:
// Event raised to parent component.

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html'
})
export class SurveyComponent {

    @Output()
    public report = new EventEmitter<string>();

    public send(level: string): void {
        this.report.emit(level);
    }

}
