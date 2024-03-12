import {Directive, ElementRef, Input, Renderer2} from "@angular/core";
import {StatusEnum} from "../enums/status.enum";
import {PriorityEnum} from "../enums/priority.enum";

@Directive({
  selector: '[backgroundColor]'
})

export class ColorDirective {

  private statusEnum = StatusEnum;
  private priorityEnum = PriorityEnum;

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }
  @Input()
  set backgroundColor(item: any) {
    if (item.status) {
      item.status === this.statusEnum.ACCORDING_TO_PLAN ? this.setBackgroundColor('#4ecbc4')
        : item.status === this.statusEnum.THREATENED ? this.setBackgroundColor('#f8df72')
          : this.setBackgroundColor('#f06a6a');
    }
    if (item.priority) {
      item.priority === this.priorityEnum.HIGH ? this.setBackgroundColor('#cd95ea')
        : item.priority === this.priorityEnum.LOW ? this.setBackgroundColor('#9ee7e3')
          : this.setBackgroundColor('#f1bd6c');
    }
  }

  private setBackgroundColor(color: string): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color)
  }
}
