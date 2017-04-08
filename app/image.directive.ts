import { Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[mwImage]'
})

export class ImageDirective{
  @HostBinding('class.imgSmall-hovering') hovering = false;

  @HostListener('mouseenter')  onmouseenter(){
    this.hovering = true;
  }

  @HostListener('mouseleave') onmouseleave(){
    this.hovering = false;
  }

  @Input() set mwImage(value) {
    this.hovering = value;
  }
}