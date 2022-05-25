import { Injectable } from '@angular/core';

// ng g s services/colors --flat=false --skip-tests

// Service - a logic class.
// DI Instances:
// 1. Component level: separate service instance for each component instance (each component object will have it's own service instance even on same component instances).
//    Usage:        provides: [MyService] in @Component.
// 2. Module level: separate service instance for each Feature Module (to use by it's components).
//    Usage:        provides: [MyService] in @NgModule of the Feature Module (AppModule is not a Feature Module and won't do that behavior).
// 3. App level: single instance for the entire app.
//    Usage:        provides: [MyService] in @NgModule of AppModule or @Injectable({providedIn: "root"}) in the service.
// 4. App level + lazy loading modules: single instance for all eager loaded modules + separate instance for each lazy loading module.
//    Usage:        @Injectable({providedIn: "any"}) in the service.
// 5. Platform level: single instance for all apps in an Angular multi apps workspace.
//    Usage:        @Injectable({providedIn: "platform"}) in the service.

@Injectable({
    providedIn: 'root'
})
export class ColorsService {

    public getRandomColor(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r},${g},${b})`;
        return color;
    }
}
