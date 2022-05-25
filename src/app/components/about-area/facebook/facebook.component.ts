import { APP_THEME, Theme } from '../../../services/theme/theme.service';
import { Component, Inject } from '@angular/core';

// ng g c components/home-area/facebook --skip-tests

// InjectionToken
// Enable injecting non class types such string, number, boolean, custom type/interface etc.
// Better to use than string token because will be unique even if name (e.g. APP_THEME) already used in some third party library.

@Component({
    selector: 'app-facebook',
    templateUrl: './facebook.component.html'
})
export class FacebookComponent {

    public constructor(@Inject(APP_THEME) public appTheme: Theme) { }

}
