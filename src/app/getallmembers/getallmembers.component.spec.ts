import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallmembersComponent } from './getallmembers.component';

describe('GetallmembersComponent', () => {
  let component: GetallmembersComponent;
  let fixture: ComponentFixture<GetallmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetallmembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetallmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
