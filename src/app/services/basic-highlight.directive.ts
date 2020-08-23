import { OnInit, Directive, ElementRef } from '@angular/core';
@Directive({
  selector:'[appBasicHighlight]'  //sq. brackets say that implement this as attribute


})
export class BasicHightDirective implements OnInit{
constructor(private elementRef:ElementRef){}
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green';
    }





}