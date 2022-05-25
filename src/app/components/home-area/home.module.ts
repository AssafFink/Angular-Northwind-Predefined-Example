import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { GiftCardComponent } from './gift-card/gift-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SalesComponent } from './sales/sales.component';
import { DiscountComponent } from './discount/discount.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ClockComponent } from './clock/clock.component';
import { SloganComponent } from './slogan/slogan.component';
import { SurveyComponent } from './survey/survey.component';
import { LocationComponent } from './location/location.component';
import { TipComponent } from './tip/tip.component';

// ng g m components/home-area/home --flat

@NgModule({
    declarations: [
        HomeComponent,
        SearchComponent,
        ClockComponent,
        SloganComponent,
        TipComponent,
        SurveyComponent,
        GiftCardComponent,
        SalesComponent,
        DiscountComponent,
        LocationComponent
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
