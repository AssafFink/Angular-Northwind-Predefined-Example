import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProduct1Component } from './edit-product-1/edit-product-1.component';
import { EditProduct2Component } from './edit-product-2/edit-product-2.component';

// ng g m components/products-area/products --flat

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailsComponent,
        ProductCardComponent,
        AddProductComponent,
        EditProduct1Component,
        EditProduct2Component
    ],
    imports: [
        CommonModule,
        RouterModule, // Needed for routerLink inside ProductCardComponent.
        FormsModule, // Needed for AddProductComponent's Template Form.
        ReactiveFormsModule // Needed for EditProductComponent's Reactive Form.
    ], 
})
export class ProductsModule { }
