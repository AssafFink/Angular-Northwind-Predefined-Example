import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SalesComponent } from './sales/sales.component';
import { CouponComponent } from './coupon/coupon.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ClockComponent } from './clock/clock.component';
import { SloganComponent } from './slogan/slogan.component';
import { SurveyComponent } from './survey/survey.component';
import { AddressComponent } from './address/address.component';
import { LocationComponent } from './location/location.component';

// ng g m components/home-area/home --flat

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        GiftCardComponent,
        SalesComponent,
        CouponComponent,
        ClockComponent,
        SloganComponent,
        SurveyComponent,
        AddressComponent,
        LocationComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipesModule,
        DirectivesModule
    ],
    // exports: [HomeComponent] // <-- Needed if <app-home> is placed inside the layout.
})
export class HomeModule { }
