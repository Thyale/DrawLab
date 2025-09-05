import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Programas } from './programas';

describe('Programas', () => {
  let component: Programas;
  let fixture: ComponentFixture<Programas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Programas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Programas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
