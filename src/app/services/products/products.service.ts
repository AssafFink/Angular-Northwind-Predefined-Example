import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';

// ng g s services/products --flat=false

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
    
}
