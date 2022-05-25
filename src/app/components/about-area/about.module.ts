import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstagramComponent } from './instagram/instagram.component';

// ng g m components/about-area/about --flat

@NgModule({
    declarations: [
        AboutComponent,
        AddressComponent,
        FacebookComponent,
        InstagramComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AboutModule { }
