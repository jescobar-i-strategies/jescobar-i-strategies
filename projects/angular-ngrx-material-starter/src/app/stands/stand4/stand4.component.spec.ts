import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stand4Component } from './stand4.component';

describe('Stand4Component', () => {
  let component: Stand4Component;
  let fixture: ComponentFixture<Stand4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stand4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stand4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
