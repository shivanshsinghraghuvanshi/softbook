import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMyListComponent } from './button-my-list.component';

describe('ButtonMyListComponent', () => {
  let component: ButtonMyListComponent;
  let fixture: ComponentFixture<ButtonMyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonMyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonMyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
