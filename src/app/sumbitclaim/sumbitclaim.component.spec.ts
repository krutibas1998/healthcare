import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumbitclaimComponent } from './sumbitclaim.component';

describe('SumbitclaimComponent', () => {
  let component: SumbitclaimComponent;
  let fixture: ComponentFixture<SumbitclaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumbitclaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumbitclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
