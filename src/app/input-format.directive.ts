import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  constructor(private elmnt: ElementRef) {}
  @Input()
  formatter: string = 'uppercase';
  @HostListener('blur', ['$event'])
  onBlur() {
    let value: string = this.elmnt.nativeElement.value;
    if (this.formatter === 'lowercase')
      this.elmnt.nativeElement.value = value.toLocaleLowerCase();
    else this.elmnt.nativeElement.value = value.toUpperCase();
  }
}
