import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { ContactUsComponent } from './components/contact-us-area/contact-us/contact-us.component';
import { ProductListComponent } from './components/products-area/product-list/product-list.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/products-area/product-details/product-details.component';
import { HomeModule } from './components/home-area/home.module';
import { ProductsModule } from './components/products-area/products.module';
import { ContactUsModule } from './components/contact-us-area/contact-us.module';

const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "products", component: ProductListComponent },
    { path: "products/details/:id", component: ProductDetailsComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule, // Needed for routing to HomeComponent.
        ProductsModule, // Needed for routing to ProductListComponent
        ContactUsModule // Needed for routing to ContactUsComponent
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
