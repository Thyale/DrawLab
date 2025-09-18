import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoCard } from './preco-card';

describe('PrecoCard', () => {
  let component: PrecoCard;
  let fixture: ComponentFixture<PrecoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecoCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecoCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
