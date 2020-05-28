import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolmainComponent } from './schoolmain.component';

describe('SchoolmainComponent', () => {
  let component: SchoolmainComponent;
  let fixture: ComponentFixture<SchoolmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
