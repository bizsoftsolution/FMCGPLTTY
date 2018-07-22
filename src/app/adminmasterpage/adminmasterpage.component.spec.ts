import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmasterpageComponent } from './adminmasterpage.component';

describe('AdminmasterpageComponent', () => {
  let component: AdminmasterpageComponent;
  let fixture: ComponentFixture<AdminmasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
