import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVotado]'
})
export class VotadoDirective {

  
  constructor(private renderer: Renderer2, private el:ElementRef) {
    
   
   }

  @HostListener('click') click() {
    this.renderer.removeClass(this.el.nativeElement, "btn-outline-danger");
    this.renderer.addClass(this.el.nativeElement, "btn-success");
    this.renderer.addClass(this.el.nativeElement, "disabled");
    this.renderer.setProperty(this.el.nativeElement,"innerHTML","Votado!")
  }


}
