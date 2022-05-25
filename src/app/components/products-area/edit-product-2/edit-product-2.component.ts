import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';

// ng g c components/products-area/edit-product2 --skip-tests

// Reactive Form - Second way

@Component({
    templateUrl: './edit-product-2.component.html',
    styleUrls: ['./edit-product-2.component.css']
})
export class EditProduct2Component implements OnInit {

    public product: ProductModel;
    public productForm: FormGroup;

    @ViewChild("imageBox")
    public imageBoxRef: ElementRef<HTMLInputElement>;

    constructor(private productsService: ProductsService, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) { }

    async ngOnInit() {
        try {
            const id = +this.activatedRoute.snapshot.params["id"];
            this.product = await this.productsService.getOneProduct(id);
            this.productForm = this.formBuilder.group({
                nameControl: new FormControl(this.product.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
                priceControl: new FormControl(this.product.price, [Validators.required, Validators.min(0), Validators.max(1000)]),
                stockControl: new FormControl(this.product.stock, [Validators.required, Validators.min(0), Validators.max(10000)]),
                imageControl: new FormControl()
            });
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public async updateProduct() {
        try {
            this.product.name = this.productForm.get("nameControl").value;
            this.product.price = this.productForm.get("priceControl").value;
            this.product.stock = this.productForm.get("stockControl").value;
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
