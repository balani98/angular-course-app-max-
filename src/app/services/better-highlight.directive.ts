import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  //HostBinding helps the listen from where event has been called
    @Input()  defaultColor:string = 'transparent';
    @Input('appBetterHighlight')   highlightColor:string = 'blue'  
      @HostBinding('style.background-color') backgroundColor:string =  'transparent'; 
  constructor(private elementRef:ElementRef,private renderer : Renderer2) { }
  ngOnInit(){
    this.backgroundColor = this.defaultColor ;
    //renderer.setStyle gets 1st parameter as element ,2nd Parameter as Which Style to set , 
    //3rd parameter as style value
   
  }
  @HostListener('mouseenter') mouseOver(){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgroundColor= this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(){
  //  this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }

}
