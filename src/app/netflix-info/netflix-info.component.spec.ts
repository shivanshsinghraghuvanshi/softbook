import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetflixInfoComponent } from './netflix-info.component';

describe('NetflixInfoComponent', () => {
  let component: NetflixInfoComponent;
  let fixture: ComponentFixture<NetflixInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetflixInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetflixInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
