import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { Inventory } from 'src/app/model/inventory';
import { Profile } from 'src/app/model/profile';
import { RentalDetailRequest } from 'src/app/model/rental-detail-request';
import { RentalHeaderRequest } from 'src/app/model/rental-header-request';
import { AuthService } from 'src/app/service/auth.service';
import { InventoryService } from 'src/app/service/inventory.service';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
})
export class AddTransactionComponent implements OnInit {
  constructor(
    private inventoryService: InventoryService,
    private transactionService: TransactionService,
    private authService: AuthService,
    private router: Router
  ) {}

  inventorySelected: number;
  inventories: Inventory[];

  carts: any[] = [];
  rentalDays: number = 0;

  profile: Profile = new Profile();

  ngOnInit(): void {
    this.inventoryService.getAvailableInventory().subscribe((value) => {
      this.inventories = value.result;
      if (this.inventories.length > 0) {
        this.inventorySelected = this.inventories[0].id;
      }
    });
  }

  addCartItem() {
    if (this.rentalDays <= 0) {
      alert('Invalid rental days!');
      return;
    }

    const inventory = this.inventories.find(
      (inventory) => inventory.id == this.inventorySelected
    );
    const selectedIndex = this.carts.findIndex(
      (cart) => cart.id == inventory.id
    );
    if (selectedIndex !== -1) {
      this.carts.splice(selectedIndex, 1);
    }
    this.carts.push({
      id: inventory.id,
      book: inventory.book,
      rentalDays: this.rentalDays,
    });
  }

  removeCartItem(idx: number) {
    this.carts.splice(idx, 1);
  }

  submitTransaction() {
    const request = new RentalHeaderRequest();
    request.customer = this.profile;
    const items: RentalDetailRequest[] = [];
    this.carts.forEach((cart) => {
      const item = new RentalDetailRequest();
      item.itemId = cart.id;
      item.rentalDays = cart.rentalDays;
      items.push(item);
    });
    request.items = items;
    request.userId = this.authService.getUser().id;
    this.transactionService.addRentalTransaction(request).subscribe((value) => {
      alert(value.result);
      this.router.navigateByUrl('/rental');
    });
  }
}
