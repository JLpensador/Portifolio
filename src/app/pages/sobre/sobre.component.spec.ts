import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreComponent } from './sobre.component';
import { SharedModule } from '../../shared/shared.module';

describe('SobreComponent', () => {
  let component: SobreComponent;
  let fixture: ComponentFixture<SobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SobreComponent],
      imports: [SharedModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
