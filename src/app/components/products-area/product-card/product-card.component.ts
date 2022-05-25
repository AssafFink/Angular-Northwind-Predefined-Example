import { ProductModel } from './../../../models/product.model';
import { environment } from './../../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';

// ng g c components/products-area/product-card --skip-tests

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
    
    @Input()
    public product: ProductModel;

    public imageSource: string;

    public ngOnInit(): void {
        this.imageSource = environment.productsUrl + "images/" + this.product.imageName;
    }

}
