import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoComponent } from './projeto.component';
import { SharedModule } from '../../shared/shared.module';

describe('ProjetoComponent', () => {
  let component: ProjetoComponent;
  let fixture: ComponentFixture<ProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetoComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
