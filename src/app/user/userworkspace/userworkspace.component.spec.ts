import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserworkspaceComponent } from './userworkspace.component';

describe('UserworkspaceComponent', () => {
  let component: UserworkspaceComponent;
  let fixture: ComponentFixture<UserworkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserworkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserworkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
