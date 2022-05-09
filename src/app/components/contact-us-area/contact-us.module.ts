import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';

// ng g m components/contact-us-area/contact-us --flat

@NgModule({
    declarations: [
        ContactUsComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class ContactUsModule { }
