import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGetAllAsyncComponent } from './book-get-all-async.component';

describe('BookGetAllAsyncComponent', () => {
  let component: BookGetAllAsyncComponent;
  let fixture: ComponentFixture<BookGetAllAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookGetAllAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookGetAllAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
