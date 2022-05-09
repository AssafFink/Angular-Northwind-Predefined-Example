import { AppRoutingModule } from './../../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// ng g m components/layout-area/layout --flat

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule, // Needed for routerLink to work in the menu (RouterModule don't do the job).
        // HomeModule // <-- Needed if <app-home> is placed inside the layout.
    ]
})
export class LayoutModule { }
