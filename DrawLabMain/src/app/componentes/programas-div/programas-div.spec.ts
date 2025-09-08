import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasDiv } from './programas-div';

describe('ProgramasDiv', () => {
  let component: ProgramasDiv;
  let fixture: ComponentFixture<ProgramasDiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramasDiv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramasDiv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
