import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMoreInfoComponent } from './button-more-info.component';

describe('ButtonMoreInfoComponent', () => {
  let component: ButtonMoreInfoComponent;
  let fixture: ComponentFixture<ButtonMoreInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonMoreInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
