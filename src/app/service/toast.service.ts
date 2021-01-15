import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  messageObservable = new Subject<Message>();

  constructor() {}

  emitMessage(message: Message) {
    this.messageObservable.next(message);
  }
}
