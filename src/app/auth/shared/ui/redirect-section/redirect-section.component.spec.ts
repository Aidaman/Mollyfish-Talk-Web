import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectSectionComponent } from './redirect-section.component';

describe('RedirectSectionComponent', () => {
  let component: RedirectSectionComponent;
  let fixture: ComponentFixture<RedirectSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedirectSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedirectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
