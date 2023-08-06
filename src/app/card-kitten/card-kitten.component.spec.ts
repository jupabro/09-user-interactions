import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKittenComponent } from './card-kitten.component';

describe('CardKittenComponent', () => {
  let component: CardKittenComponent;
  let fixture: ComponentFixture<CardKittenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardKittenComponent]
    });
    fixture = TestBed.createComponent(CardKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
