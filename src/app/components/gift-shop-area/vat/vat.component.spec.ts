import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MonetaryService } from 'src/app/services/monetary/monetary.service';
import { VatComponent } from './vat.component';

// Run all tests: ng test
// Run tests resides in specific folder: ng test --include folder-path

describe('VatComponent', () => {

    let component: VatComponent; // Component to test
    let fixture: ComponentFixture<VatComponent>; // fixture = fixed (non movable) things.

    // Configure Modules:
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [VatComponent],
            imports: [CommonModule, FormsModule],
            // providers: [MonetaryService]
        }).compileComponents();
    });

    // Create Component:
    beforeEach(() => {
        fixture = TestBed.createComponent(VatComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // Tests (each independently):

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should init price with 0', () => {
        expect(component.price).toEqual(0);
    });

    it('should contain a vat between 1 to 100', () => {
        expect(component.percent).withContext("min 1 vat").toBeGreaterThan(0); // withContext - additional message to show when test fail.
        expect(component.percent).withContext("max 100 vat").toBeLessThan(100);
    });

    it('should calculate vat correctly', () => {
        component.price = Math.floor(Math.random() * 1000);
        const service = new MonetaryService();
        const serviceVat = service.getVat(component.price, component.percent);
        component.calc();
        expect(component.vat).toEqual(serviceVat);
    });

    it('should clear values when clicking "Clear"', () => {
        expect(component.price).withContext("price 0 at init").toEqual(0);
        expect(component.vat).withContext("vat 0 at init").toEqual(0);
        component.price = Math.floor(Math.random() * 1000 + 1);
        component.calc();
        expect(component.vat).withContext("positive vat after calc").toBeGreaterThan(0);
        component.clear();
        expect(component.price).withContext("price 0 after clear").toEqual(0);
        expect(component.vat).withContext("vat 0 after clear").toEqual(0);
    });

    it('should contain h4 with the text "VAT Calculator"', () => {
        const html = fixture.debugElement.nativeElement as HTMLElement;
        const h4 = html.querySelector("h4") as HTMLHeadingElement;
        expect(h4.textContent).toContain("VAT Calculator");
    });

    it('should contain input[type="number"] element', () => {
        const html = fixture.debugElement.nativeElement as HTMLElement;
        const input = html.querySelector("input") as HTMLInputElement;
        expect(input.type).toEqual("number");
    });

    // When Angular rendered on a non browser platform (server side / mobile) - we don't have browser HTML, thus can check via CSS which is always present:
    it('should contain label with text "Price"', () => {
        const label = fixture.debugElement.query(By.css("label")).nativeElement as HTMLLabelElement;
        expect(label.textContent).toContain("Price");
    });

});
