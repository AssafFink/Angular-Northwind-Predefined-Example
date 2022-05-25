import { InjectionToken } from "@angular/core";

export type Theme = {
    color: string;
    backgroundColor: string;
};

const defaultTheme: Theme = {
    color: "white",
    backgroundColor: "blue"
};

export const APP_THEME = new InjectionToken<Theme>("Application Theme", { 
    providedIn: "root",
    factory: () => defaultTheme 
});
