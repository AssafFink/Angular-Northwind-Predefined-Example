import { Component } from '@angular/core';

// ng g c components/gift-shop-area/map --skip-import --skip-tests

// Lazy Loading component
// Getting component from backend when needed instead eagerly loaded when app starts.
// Suitable for performance - when component is large and not always needed.

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent { }
