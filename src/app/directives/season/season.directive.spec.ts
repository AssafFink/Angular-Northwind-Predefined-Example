import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeasonDirective } from './season.directive';

// Temp component for testing the directive:
@Component({
    template: `
    <p *season="'spring'">spring</p>
    <p *season="'summer'">summer</p>
    <p *season="'autumn'">autumn</p>
    <p *season="'winter'">winter</p>`
})
class TestComponent { }

describe('SeasonDirective', () => {

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [SeasonDirective, TestComponent]
        }).createComponent(TestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); // Initial binding.
    });

    it('should have only one paragraph', () => {
        const html = fixture.debugElement.nativeElement as HTMLElement;
        const paragraphs = html.querySelectorAll("p") as NodeListOf<HTMLParagraphElement>;
        expect(paragraphs.length).toEqual(1);
    });

    it('should render correct season', () => {
        const html = fixture.debugElement.nativeElement as HTMLElement;
        const paragraph = html.querySelector("p") as HTMLParagraphElement;
        expect(paragraph.textContent).toEqual(getCurrentSeason());
    });

    function getCurrentSeason(): string {
        const now = new Date();
        let month = now.getMonth() + 1;
        if(month >= 4 && month <= 5) return "spring";
        if(month >= 6 && month <= 9) return "summer";
        if(month >= 10 && month <= 11) return "autumn";
        return "winter";
    }

});
