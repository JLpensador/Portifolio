import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSobreComponent } from './card-sobre.component';

describe('CardSobreComponent', () => {
  let component: CardSobreComponent;
  let fixture: ComponentFixture<CardSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSobreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
