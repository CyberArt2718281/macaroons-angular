import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[button-hover]',
})
export class ButtonHoverDirective {
  constructor(private el: ElementRef, private rend: Renderer2) {}

  ngOnInit() {
    this.rend.setStyle(this.el.nativeElement, 'box-shadow', 'unset');
  }
  @HostListener('mouseenter')
  onMouseLeave() {
    this.rend.setStyle(
      this.el.nativeElement,
      'box-shadow',
      '0 5px 9px 1px rgba(130, 19, 40, 0.5)'
    );
  }
  @HostListener('mouseleave')
  onMouseEnter(): void {
  
    this.rend.setStyle(this.el.nativeElement, 'box-shadow', 'unset');
  }
}
