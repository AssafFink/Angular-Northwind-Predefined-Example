import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

// ng g d directives/highlight --flat=false

// Custom Attribute Directive:
// <p highlight>...</p>
// <p highlight="cyan">...</p>
// Can use more @Input() props, e.g: @Input bg = ""; --> <p highlight="cyan" bg="red">...</p> 

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    @Input("highlight")
    public defaultColor = "";

    public ngOnInit(): void {
        if(!this.defaultColor) {
            this.defaultColor = "yellow";
        }
    }

    @HostBinding("style.background-color")
    public color = "";

    @HostListener("mouseenter")
    public setHighlight(): void {
        this.color = this.defaultColor;
    }

    @HostListener("mouseleave")
    public setBlack(): void {
        this.color = "";
    }

}
