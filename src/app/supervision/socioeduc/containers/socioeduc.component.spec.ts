import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioeducComponent } from './socioeduc.component';

describe('SocioeducComponent', () => {
  let component: SocioeducComponent;
  let fixture: ComponentFixture<SocioeducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocioeducComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioeducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
