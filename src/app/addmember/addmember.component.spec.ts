import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddmemberService } from '../services/addmember.service';
import { FormsModule } from '@angular/forms';



import { AddmemberComponent } from './addmember.component';

describe('AddmemberComponent', () => {
  let component: AddmemberComponent;
  let fixture: ComponentFixture<AddmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientTestingModule
      
        
      ],
      declarations: [ AddmemberComponent ]
    })
    .compileComponents();
  });

  

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
