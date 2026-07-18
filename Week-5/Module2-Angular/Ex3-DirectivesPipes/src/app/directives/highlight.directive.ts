import { Directive, HostListener, Input } from '@angular/core';

// Custom Highlight Directive: adds a yellow background on mouseenter and
// removes it on mouseleave. The colour is configurable via @Input().
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('');
  }

  private highlight(color: string): void {
    const el = document.querySelector('.card');
    if (el) {
      (el as HTMLElement).style.backgroundColor = color;
    }
  }
}
