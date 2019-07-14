import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNamePopupComponent } from './chat-name-popup.component';

describe('ChatNamePopupComponent', () => {
  let component: ChatNamePopupComponent;
  let fixture: ComponentFixture<ChatNamePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatNamePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatNamePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
