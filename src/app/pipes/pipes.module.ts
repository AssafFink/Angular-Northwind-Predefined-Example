import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumToWordPipe } from './num-to-word/num-to-word.pipe';

// ng g m pipes

@NgModule({
    declarations: [
        NumToWordPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NumToWordPipe
    ]
})
export class PipesModule { }
