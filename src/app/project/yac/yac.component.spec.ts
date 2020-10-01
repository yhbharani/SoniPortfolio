import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YacComponent } from './yac.component';

describe('YacComponent', () => {
  let component: YacComponent;
  let fixture: ComponentFixture<YacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
