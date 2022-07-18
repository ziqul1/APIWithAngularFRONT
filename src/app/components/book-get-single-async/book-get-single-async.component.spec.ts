import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGetSingleAsyncComponent } from './book-get-single-async.component';

describe('BookGetSingleAsyncComponent', () => {
  let component: BookGetSingleAsyncComponent;
  let fixture: ComponentFixture<BookGetSingleAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookGetSingleAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookGetSingleAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
