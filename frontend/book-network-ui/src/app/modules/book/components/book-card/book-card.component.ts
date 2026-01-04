import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookResponse } from 'src/app/services/models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  private _book: BookResponse = {};
  private _bookCover: string | undefined;
  private _manage: boolean = false;

  // Getters and Setters
  public get manage(): boolean {
    return this._manage;
  }
  @Input()
  public set manage(value: boolean) {
    this._manage = value;
  }

  @Input()
  set book(value: BookResponse) {
    this._book = value;
  }
  get book(): BookResponse {
    return this._book;
  }

  get bookCover(): string | undefined {
    if (this._book.cover) {
      return 'data:image/jpg;base64, ' + this._book.cover;
    }
    return 'https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  }

  @Output() private share: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  @Output() private archive: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  @Output() private wishlist: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  @Output() private borrow: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  @Output() private edit: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();
  @Output() private details: EventEmitter<BookResponse> = new EventEmitter<BookResponse>();

  // Methods
  onArchive() {
    this.archive.emit(this._book);
  }
  onEdit() {
     this.edit.emit(this._book);
  }
  onShare() {
    this.share.emit(this._book);
  }
  onAddToWaitingList() {
     this.wishlist.emit(this._book);
  }
  onBorrow() {
    this.borrow.emit(this._book);
  }
  onShowDetails() {
    this.details.emit(this._book)
  }
}
