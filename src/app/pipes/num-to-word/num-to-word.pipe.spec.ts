import { NumToWordPipe } from '../num-to-word/num-to-word.pipe';

describe('NumToWordPipe', () => {

    let pipe: NumToWordPipe;

    beforeEach(() => {
        pipe = new NumToWordPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should return 1 as a word', () => {
        expect(pipe.transform(1)).withContext("1 --> one").toEqual("one");
        expect(pipe.transform(1, true)).withContext("1 --> One").toEqual("One");
    });

    it('should return original number', () => {
        expect(pipe.transform(12)).withContext("12 --> 12").toEqual(12);
        expect(pipe.transform(-12)).withContext("-12 --> -12").toEqual(-12);
    });

});
