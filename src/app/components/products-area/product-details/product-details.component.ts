import { environment } from './../../../../environments/environment';
import { ProductModel } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

// ng g c components/products-area/product-details

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;
    public imageSource: string;

    constructor(private activatedRoute: ActivatedRoute, private productsService: ProductsService, private router: Router) { }

    async ngOnInit() {
        try {
            const id = +this.activatedRoute.snapshot.params["id"];
            this.product = await this.productsService.getOneProduct(id);
            this.imageSource = environment.productsUrl + "images/" + this.product.imageName;
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    // async deleteProduct() {
    //     try {
    //         const ok = confirm("Are you sure?");
    //         if (!ok) return;
    //         await this.productsService.deleteProduct(this.product.id);
    //         this.notifyService.success("Product has been deleted");
    //         this.router.navigateByUrl("/products");
    //     }
    //     catch (err: any) {
    //         this.notifyService.error(err);
    //     }
    // }

}
