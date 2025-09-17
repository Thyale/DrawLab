import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Depoimentos } from './depoimentos';

describe('Depoimentos', () => {
  let component: Depoimentos;
  let fixture: ComponentFixture<Depoimentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Depoimentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Depoimentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
