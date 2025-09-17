import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasCard } from './programas-card';

describe('ProgramasCard', () => {
  let component: ProgramasCard;
  let fixture: ComponentFixture<ProgramasCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramasCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramasCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
