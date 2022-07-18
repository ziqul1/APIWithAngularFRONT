import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDeleteAsyncComponent } from './book-delete-async.component';

describe('BookDeleteAsyncComponent', () => {
  let component: BookDeleteAsyncComponent;
  let fixture: ComponentFixture<BookDeleteAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDeleteAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDeleteAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
