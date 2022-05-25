import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftShopComponent } from './gift-shop/gift-shop.component';
import { CurrencyComponent } from './currency/currency.component';
import { ShoppersComponent } from './shoppers/shoppers.component';
import { VatComponent } from './vat/vat.component';
import { FormsModule } from '@angular/forms';

// ng g m components/gift-shop-area/gift-shop --flat

@NgModule({
    declarations: [
        GiftShopComponent,
        CurrencyComponent,
        ShoppersComponent,
        VatComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class GiftShopModule { }
