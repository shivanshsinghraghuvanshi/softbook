import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
  selector: "[softbookRating]"
})
export class RatingDirective {
  @Input("rating") rating: number;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
