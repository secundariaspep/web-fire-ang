import {Component, EventEmitter, Output} from '@angular/core';

enum matSelectedFields {
  daily = 'Día',
  weekly = 'Semana',
  monthly = 'Mes'
}

@Component({
  selector: 'app-date-menu',
  templateUrl: './date-menu.component.html',
  styleUrls: ['./date-menu.component.scss']
})
export class DateMenuComponent {
  @Output() changeDateType = new EventEmitter<string>();
  public matSelectFields: typeof matSelectedFields = matSelectedFields;
  public selectedMatSelectValue = matSelectedFields.daily;

  public changedMatSelectionValue(dateType: string) {
    this.changeDateType.emit(dateType);
  }
}
