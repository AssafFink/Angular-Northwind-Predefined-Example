import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersComponent } from './sellers/sellers.component';
import { RetailersComponent } from './retailers/retailers.component';
import { WholesalersComponent } from './wholesalers/wholesalers.component';
import { RouterModule, Routes } from '@angular/router';

// ng g m components/sellers-area/sellers --flat

const routes: Routes = [
    { path: "", component: SellersComponent },
    { path: "retailers", component: RetailersComponent },
    { path: "wholesalers", component: WholesalersComponent },
];

@NgModule({
    declarations: [
        SellersComponent,
        RetailersComponent,
        WholesalersComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class SellersModule { }
