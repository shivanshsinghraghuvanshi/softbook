import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPlayComponent } from './button-play.component';

describe('ButtonPlayComponent', () => {
  let component: ButtonPlayComponent;
  let fixture: ComponentFixture<ButtonPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
