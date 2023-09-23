import { outputAst, parseHostBindings } from "@angular/compiler";
import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "h1",
})
export class HighlightedDirective {
  constructor() {}

  @Input("highlighted")
  isHighlighted = false;

  @Output()
  toggleEmitter = new EventEmitter();

  @HostBinding("class.highlighted")
  get applyclasses() {
    return this.isHighlighted;
  }

  @HostListener("mouseover", ["$event"])
  mouseover() {
    this.isHighlighted = true;
    this.toggleEmitter.emit(this.isHighlighted);
    return true;
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleEmitter.emit(this.isHighlighted);
  }
  // @HostListener("mouseleave", ["$event"])
  // mouseleave() {
  //   this.isHighlighted = false;
  //   this.toggleEmitter.emit(this.isHighlighted);
  //   return true;
  // }
}
