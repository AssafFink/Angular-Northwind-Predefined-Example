import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';

// ng g m components/products-area/products --flat

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule, // Needed for routerLink inside ProductCardComponent.
    ], 
})
export class ProductsModule { }
