import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { AdminComponent } from './layout/admin/admin.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { BookComponent } from './page/book/book.component';
import { CustomerComponent } from './page/customer/customer.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { ModifyBookComponent } from './page/modify-book/modify-book.component';
import { TransactionComponent } from './page/transaction/transaction.component';
import { DetailTransactionComponent } from './page/detail-transaction/detail-transaction.component';
import { AddTransactionComponent } from './page/add-transaction/add-transaction.component';
import { ModifyCustomerComponent } from './page/modify-customer/modify-customer.component';
import { RoleComponent } from './page/role/role.component';
import { ModifyRoleComponent } from './page/modify-role/modify-role.component';
import { UserComponent } from './page/user/user.component';
import { ModifyUserComponent } from './page/modify-user/modify-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    NotFoundComponent,
    BookComponent,
    CustomerComponent,
    DashboardComponent,
    ModifyBookComponent,
    TransactionComponent,
    DetailTransactionComponent,
    AddTransactionComponent,
    ModifyCustomerComponent,
    RoleComponent,
    ModifyRoleComponent,
    UserComponent,
    ModifyUserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
