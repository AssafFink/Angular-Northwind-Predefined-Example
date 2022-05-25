import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';

// ng g s services/products --flat=false --skip-tests

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    public constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
        const products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const product = await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id));
        return product;
    }

    public async addProduct(product: ProductModel): Promise<void> {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);
        await firstValueFrom(this.http.post(environment.productsUrl, formData));
    }

    public async updateProduct(product: ProductModel): Promise<void> {
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image);
        await firstValueFrom(this.http.put(environment.productsUrl + product.id, formData));
    }

    public async deleteProduct(id: number): Promise<void> {
        await firstValueFrom(this.http.delete(environment.productsUrl + id));
    }

}
