import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomHeadingComponent } from './chatroom-heading.component';

describe('ChatroomHeadingComponent', () => {
  let component: ChatroomHeadingComponent;
  let fixture: ComponentFixture<ChatroomHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatroomHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatroomHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
