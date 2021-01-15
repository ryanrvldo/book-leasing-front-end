import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRentalDetailComponent } from './transaction-rental-detail.component';

describe('DetailTransactionComponent', () => {
  let component: TransactionRentalDetailComponent;
  let fixture: ComponentFixture<TransactionRentalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionRentalDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRentalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
