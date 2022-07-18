import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAddAsyncComponent } from './book-add-async.component';

describe('BookAddAsyncComponent', () => {
  let component: BookAddAsyncComponent;
  let fixture: ComponentFixture<BookAddAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookAddAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookAddAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
