import { TestBed } from '@angular/core/testing';
import { MonetaryService } from './monetary.service';

// Run all tests: ng test
// Run tests resides in specific folder: ng test --include folder-path

describe('MonetaryService', () => {
    
    let service: MonetaryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MonetaryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should calculate vat correctly', () => {
        const price = Math.floor(Math.random() * 1000);
        const percent = 17;
        const vat = service.getVat(price, percent);
        expect(vat).toEqual(price * percent / 100);
    });

    it('should calculate async vat correctly', async () => { // Jasmine has a default 5sec timeout before test fail. 
        const price = Math.floor(Math.random() * 1000);
        const percent = 17;
        const vat = await service.getVatAsync(price, percent);
        expect(vat).toEqual(price * percent / 100);
    });

});
