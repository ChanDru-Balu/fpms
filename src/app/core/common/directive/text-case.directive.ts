import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextCase]',
})
export class TextCaseDirective implements OnInit {

  @Input() appTextCase: string = 'uppercase';

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.textTransform = this.appTextCase;
  }
}
