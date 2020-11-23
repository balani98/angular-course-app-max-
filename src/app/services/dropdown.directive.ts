import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

@HostBinding('class.open')  isOpen=false;
@HostListener('document:click', ['$event']) toggleOpen(event : Event){
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false; // this logic says if the person
     //clicks inside the event then make the condition true if again click is listened make it false,
     //but if the click lies outside ,then make the condition false (which means close the dropdown)
}

 constructor(private elRef: ElementRef){}
}