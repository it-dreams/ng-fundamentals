import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class Highlight {
    constructor(private el: ElementRef) {
        // console.log(el)
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}