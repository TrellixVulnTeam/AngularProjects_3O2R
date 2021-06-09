import {Directive, ElementRef} from '@angular/core';
@Directive({

    selector:'[bold]'
})
export class BoldDirective{
    /**
     *
     */
    constructor(private elemRef:ElementRef) {
       this.elemRef.nativeElement.style.fontWeight="bold";
        
    }
}