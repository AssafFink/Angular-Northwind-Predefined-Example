import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { HomeModule } from './components/home-area/home.module';
import { ProductsModule } from './components/products-area/products.module';
import { AddProductComponent } from './components/products-area/add-product/add-product.component';
import { EditProduct1Component } from './components/products-area/edit-product-1/edit-product-1.component';
import { ContactUsModule } from './components/contact-us-area/contact-us.module';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { GiftShopComponent } from './components/gift-shop-area/gift-shop/gift-shop.component';
import { GiftShopModule } from './components/gift-shop-area/gift-shop.module';
import { AboutComponent } from './components/about-area/about/about.component';
import { AboutModule } from './components/about-area/about.module';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "products", component: ProductListComponent },
    { path: "products/details/:id", component: ProductDetailsComponent },
    { path: "products/new", component: AddProductComponent },
    { path: "products/edit/:id", component: EditProduct1Component },
    { path: "gift-shop", component: GiftShopComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "sellers", loadChildren: () => import("./components/sellers-area/sellers.module").then(m => m.SellersModule) }, // Lazy Loading Module.
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule, // Needed for routing to HomeComponent (if contains other non-lazy components, and it does).
        AboutModule, // Needed for routing to AboutComponent (if contains other non-lazy components, and it does).
        ProductsModule, // Needed for routing to ProductListComponent (if contains other non-lazy components, and it does).
        GiftShopModule, // Needed for routing to GiftShopComponent (if contains other non-lazy components, and it does).
        ContactUsModule // Not really needed because ContactUsComponent doesn't contain other non-lazy components in it, but good to add for consistency.
        // Must not add SellersModule or it will eagerly loaded.
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
