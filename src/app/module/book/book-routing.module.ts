import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from 'src/app/page/book/book.component';
import { ModifyBookComponent } from 'src/app/page/modify-book/modify-book.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'book/add',
    component: ModifyBookComponent,
  },
  {
    path: 'book/edit',
    component: ModifyBookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
