import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from 'src/app/page/book/book.component';
import { ModifyBookComponent } from 'src/app/page/modify-book/modify-book.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BookComponent, ModifyBookComponent],
  imports: [CommonModule, BookRoutingModule, FormsModule],
})
export class BookModule {}
