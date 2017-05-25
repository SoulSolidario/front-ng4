import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Passo3Component } from './passo-3.component';

describe('Passo3Component', () => {
  let component: Passo3Component;
  let fixture: ComponentFixture<Passo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Passo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Passo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
