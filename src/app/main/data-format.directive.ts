import { Directive, HostListener, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[softbookDataFormat]"
})
export class DataFormatDirective {
  @Input("type") type: type;
  constructor(private element: ElementRef) {}

  @HostListener("focus") onFocus(): void {
    console.log("check of it working f focus");
  }

  @HostListener("blur") onBlur(): void {
    let value = this.element.nativeElement.value as string;
    if (this.type === type.lower) {
      this.element.nativeElement.value = value.toLowerCase();
    } else if (this.type === type.upper) {
      this.element.nativeElement.value = value.toUpperCase();
    } else {
      this.element.nativeElement.value = value;
    }
  }
}

enum type {
  lower = "lower",
  upper = "upper"
}
