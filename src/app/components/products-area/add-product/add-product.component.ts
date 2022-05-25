import { ProductsService } from 'src/app/services/products/products.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';

// ng g c components/products-area/add-product --skip-tests

// Template Form

@Component({
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    public product = new ProductModel();

    @ViewChild("imageBox")
    public imageRef: ElementRef<HTMLInputElement>;

    public constructor(private productsService: ProductsService, private router: Router) { }

    public async addProduct() {
        try {
            this.product.image = this.imageRef.nativeElement.files[0];
            await this.productsService.addProduct(this.product);
            alert("Product has been successfully added.");
            this.router.navigateByUrl("/products");
        }
        catch (err: any) {
            alert(err.message)
        }
    }

}
