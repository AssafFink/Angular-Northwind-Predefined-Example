import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

// ng g d directives/zoom-in --flat=false

// ElementRef: Wrapper around the host element.
// Renderer2: DOM access utility.
// Don't change elementRef.nativeElement without renderer cause it won't work on Mobile/Desktop apps running angular.

@Directive({
    selector: '[zoomIn]'
})
export class ZoomInDirective implements OnInit {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    public ngOnInit(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, "transition", "transform 1s");
    }
    
    @HostListener("mouseenter")
    public setHighlight(): void {
        this.renderer.setStyle(this.elementRef.nativeElement, "transform", "scale(1.2)");
    }
    
    @HostListener("mouseleave")
    public setBlack(): void {
        this.renderer.removeStyle(this.elementRef.nativeElement, "transform");        
    }

}
