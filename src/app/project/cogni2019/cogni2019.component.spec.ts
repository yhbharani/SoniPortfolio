import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cogni2019Component } from './cogni2019.component';

describe('Cogni2019Component', () => {
  let component: Cogni2019Component;
  let fixture: ComponentFixture<Cogni2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cogni2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cogni2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
