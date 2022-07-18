import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileWriteComponent } from './file-write.component';

describe('FileWriteComponent', () => {
  let component: FileWriteComponent;
  let fixture: ComponentFixture<FileWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileWriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
