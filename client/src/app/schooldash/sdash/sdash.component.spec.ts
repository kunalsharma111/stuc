import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdashComponent } from './sdash.component';

describe('SdashComponent', () => {
  let component: SdashComponent;
  let fixture: ComponentFixture<SdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
