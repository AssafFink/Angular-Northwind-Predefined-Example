import { ProductModel } from './../../../models/product.model';
import { ProductsService } from './../../../services/products/products.service';
import { Component, OnInit } from '@angular/core';

// ng g c components/products-area/product-list --skip-tests

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public products: ProductModel[] = [];

    public constructor(private productsService: ProductsService) { }

    public async ngOnInit(): Promise<void> {
        try {
            this.products = await this.productsService.getAllProducts();
        }
        catch(err: any) {
            alert(err.message);
        }
    }
}
