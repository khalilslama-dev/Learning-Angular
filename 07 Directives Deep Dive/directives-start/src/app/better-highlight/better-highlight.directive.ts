import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elref: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event): void {
    // this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event): void {
   // this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
