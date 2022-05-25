import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// ng g d directives/season --flat=false --skip-tests

// TemplateRef: <ng-template> wrapping the host.
// ViewContainerRef: the element wrapping <ng-template>
// Never use Renderer/Renderer2 to change DOM structure (add / remove) because it will do it on the DOM but not at the View representing it, thus won't be complete.
// Use for that the ViewContainerRef which will do the work.

@Directive({
    selector: '[season]'
})
export class SeasonDirective {

    @Input("season")
    public season: string;

    public constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

    public ngOnInit(): void {
        if (this.season === this.getCurrentSeason()) {
            this.viewContainerRef.createEmbeddedView(this.templateRef); // Create the template element inside the container.
        }
    }

    private getCurrentSeason(): string {
        const now = new Date();
        let month = now.getMonth() + 1;
        if(month >= 4 && month <= 5) return "spring";
        if(month >= 6 && month <= 9) return "summer";
        if(month >= 10 && month <= 11) return "autumn";
        return "winter";
    }

}
