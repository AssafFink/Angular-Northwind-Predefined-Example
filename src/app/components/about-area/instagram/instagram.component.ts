import { Component, Inject } from '@angular/core';
import { APP_THEME, Theme } from 'src/app/services/theme/theme.service';

// ng g c components/about-area/instagram --skip-tests

// InjectionToken
// We can supply our own value instead of the default one:
const instagramTheme: Theme = {
    color: "white",
    backgroundColor: "red"
};

@Component({
    selector: 'app-instagram',
    templateUrl: './instagram.component.html',
    providers: [{ provide: APP_THEME, useValue: instagramTheme }]
})
export class InstagramComponent {

    public constructor(@Inject(APP_THEME) public appTheme: Theme) { }

}
