import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-settings-edit',
  templateUrl: './settings-edit.component.html',
  styleUrls: ['./settings-edit.component.scss']
})
export class SettingsEditComponent implements OnInit {
  public settingForm: FormGroup;

  constructor() {
  }

  public ngOnInit() {
    this.settingForm = new FormGroup({
      lang: new FormControl('eng'),
    });
  }

  get lang() {
    return this.settingForm.get('lang') as FormControl;
  }
}
