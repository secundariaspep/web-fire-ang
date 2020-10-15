import {
  Directive,
  Input,
  HostBinding,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[app-menuItem]',
})
export class MenuItemDirective {
  @HostBinding('class.menu-item') menuItem = true;

  @HostBinding('class.selected') isSelected: boolean = false;

  @Input()
  name: string;

  @Output()
  selected: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click', ['$event'])
  select() {
    this.selected.emit(this.name);
  }
}
