import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCard]'
})
export class CardDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.border = '1px solid #ddd';
    this.el.nativeElement.style.padding = '10px';
    this.el.nativeElement.style.margin = '10px';
    this.el.nativeElement.style.borderRadius = '5px';
  }
}
