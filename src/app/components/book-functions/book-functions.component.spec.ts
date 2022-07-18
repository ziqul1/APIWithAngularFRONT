import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFunctionsComponent } from './book-functions.component';

describe('BookFunctionsComponent', () => {
  let component: BookFunctionsComponent;
  let fixture: ComponentFixture<BookFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFunctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
