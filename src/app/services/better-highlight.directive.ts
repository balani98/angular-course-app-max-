import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //HostBinding helps the listen from where event has been called
   @HostBinding('style.background-color') backgroundColor:string =  'transparent'; 
  constructor(private elementRef:ElementRef,private renderer : Renderer2) { }
  ngOnInit(){
    //renderer.setStyle gets 1st parameter as element ,2nd Parameter as Which Style to set , 
    //3rd parameter as style value
   
  }
  @HostListener('mouseenter') mouseOver(){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroundColor='blue'
  }
  @HostListener('mouseleave') mouseLeave(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = 'transparent';
  }

}
