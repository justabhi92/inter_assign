import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmultiComponent } from './addmulti.component';

describe('AddmultiComponent', () => {
  let component: AddmultiComponent;
  let fixture: ComponentFixture<AddmultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
