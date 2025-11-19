import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homr } from './homr';

describe('Homr', () => {
  let component: Homr;
  let fixture: ComponentFixture<Homr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
