import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
@Directive({

    selector:'[bold]'
})
export class BoldDirective{
    /**
     *
     */
    @Input("bold") selectedSize="18px";
    @Input() defaultSize="16px";
    private fontSize:string;
    constructor(private elemRef:ElementRef, private renderer:Renderer2) {

        this.fontSize=this.defaultSize;
        
       //this.elemRef.nativeElement.style.fontWeight="bold";
        this.renderer.setStyle(this.elemRef.nativeElement, "cursor", "pointer");
        
    }
    @HostListener("mouseenter") onMouseEnter(){
        this.setFontWeight("bold");
    }


    @HostListener("mouseleave") onMouseLeave()
    {
        this.setFontWeight("normal");
    }
    setFontWeight(width:string)
    {
        this.renderer.setStyle(this.elemRef.nativeElement, "font-weight", width);
    }
}