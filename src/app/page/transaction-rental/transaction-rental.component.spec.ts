import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRentalComponent } from './transaction-rental.component';

describe('TransactionRentalComponent', () => {
  let component: TransactionRentalComponent;
  let fixture: ComponentFixture<TransactionRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionRentalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
