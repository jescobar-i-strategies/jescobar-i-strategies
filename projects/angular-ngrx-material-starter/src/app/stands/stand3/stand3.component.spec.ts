import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stand3Component } from './stand3.component';

describe('Stand3Component', () => {
  let component: Stand3Component;
  let fixture: ComponentFixture<Stand3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stand3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stand3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
