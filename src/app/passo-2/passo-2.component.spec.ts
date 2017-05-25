import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Passo2Component } from './passo-2.component';

describe('Passo2Component', () => {
  let component: Passo2Component;
  let fixture: ComponentFixture<Passo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Passo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Passo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
