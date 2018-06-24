import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comtest1Component } from './comtest1.component';

describe('Comtest1Component', () => {
  let component: Comtest1Component;
  let fixture: ComponentFixture<Comtest1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comtest1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comtest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
