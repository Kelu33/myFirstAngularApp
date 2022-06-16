import { Directive, ElementRef, OnInit, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {    
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'brown');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'aquamarine');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', 'xxx-large');
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'unset');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'unset');
    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', 'unset');
  }

}
