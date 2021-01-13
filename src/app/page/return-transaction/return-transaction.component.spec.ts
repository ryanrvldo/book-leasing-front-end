import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnTransactionComponent } from './return-transaction.component';

describe('ReturnTransactionComponent', () => {
  let component: ReturnTransactionComponent;
  let fixture: ComponentFixture<ReturnTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
