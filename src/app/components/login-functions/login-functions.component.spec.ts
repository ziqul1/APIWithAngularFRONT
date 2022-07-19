import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFunctionsComponent } from './login-functions.component';

describe('LoginFunctionsComponent', () => {
  let component: LoginFunctionsComponent;
  let fixture: ComponentFixture<LoginFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFunctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
