import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionReturnComponent } from './transaction-return.component';

describe('TransactionReturnComponent', () => {
  let component: TransactionReturnComponent;
  let fixture: ComponentFixture<TransactionReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionReturnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
