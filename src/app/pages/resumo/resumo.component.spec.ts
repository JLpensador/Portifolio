import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoComponent } from './resumo.component';
import { SharedModule } from '../../shared/shared.module';

describe('ResumoComponent', () => {
  let component: ResumoComponent;
  let fixture: ComponentFixture<ResumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumoComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
