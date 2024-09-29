import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjetosComponent } from './card-projetos.component';

describe('CardProjetosComponent', () => {
  let component: CardProjetosComponent;
  let fixture: ComponentFixture<CardProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
