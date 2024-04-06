import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadCheckComponent } from './read-check.component';

describe('ReadCheckComponent', () => {
  let component: ReadCheckComponent;
  let fixture: ComponentFixture<ReadCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
