import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRentalAddComponent } from './transaction-rental-add.component';

describe('TransactionRentalAddComponent', () => {
  let component: TransactionRentalAddComponent;
  let fixture: ComponentFixture<TransactionRentalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionRentalAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRentalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
