import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedBookListComponent } from './returned-book-list.component';

describe('ReturnedBookListComponent', () => {
  let component: ReturnedBookListComponent;
  let fixture: ComponentFixture<ReturnedBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnedBookListComponent]
    });
    fixture = TestBed.createComponent(ReturnedBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
