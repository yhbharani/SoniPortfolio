import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JnvComponent } from './jnv.component';

describe('JnvComponent', () => {
  let component: JnvComponent;
  let fixture: ComponentFixture<JnvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JnvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
