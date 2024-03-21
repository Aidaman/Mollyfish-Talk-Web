import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeChangeButtonComponent } from './theme-change-button.component';

describe('ThemeChangeButtonComponent', () => {
  let component: ThemeChangeButtonComponent;
  let fixture: ComponentFixture<ThemeChangeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeChangeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeChangeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
