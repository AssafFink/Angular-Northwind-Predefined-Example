import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

// ng g c components/products-area/edit-product1 --skip-tests

// Reactive Form - First way

@Component({
    templateUrl: './edit-product-1.component.html',
    styleUrls: ['./edit-product-1.component.css']
})
export class EditProduct1Component implements OnInit {

    public product: ProductModel;
    public productForm: FormGroup;
    public nameControl: FormControl;
    public priceControl: FormControl;
    public stockControl: FormControl;
    public imageControl: FormControl;

    @ViewChild("imageBox")
    public imageBoxRef: ElementRef<HTMLInputElement>;

    constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) { }

    async ngOnInit() {
        try {
            const id = +this.activatedRoute.snapshot.params["id"];
            this.product = await this.productsService.getOneProduct(id);
            this.nameControl = new FormControl(this.product.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
            this.priceControl = new FormControl(this.product.price, [Validators.required, Validators.min(0), Validators.max(1000)]);
            this.stockControl = new FormControl(this.product.stock, [Validators.required, Validators.min(0), Validators.max(10000)]);
            this.imageControl = new FormControl();
            this.productForm = new FormGroup({
                nameControl: this.nameControl,
                priceControl: this.priceControl,
                stockControl: this.stockControl,
                imageControl: this.imageControl
            });
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public async updateProduct() {
        try {
            this.product.name = this.nameControl.value;
            this.product.price = this.priceControl.value;
            this.product.stock = this.stockControl.value;
            this.product.image = this.imageBoxRef.nativeElement.files[0];
            await this.productsService.updateProduct(this.product);
            alert("Product has been updated");
            this.router.navigateByUrl("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }
}

