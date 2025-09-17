import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentosCard } from './depoimentos-card';

describe('DepoimentosCard', () => {
  let component: DepoimentosCard;
  let fixture: ComponentFixture<DepoimentosCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepoimentosCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepoimentosCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
