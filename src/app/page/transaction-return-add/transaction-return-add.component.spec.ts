import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReturnAddComponent } from './transaction-return-add.component';

describe('TransactionReturnAddComponent', () => {
  let component: TransactionReturnAddComponent;
  let fixture: ComponentFixture<TransactionReturnAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionReturnAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionReturnAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
