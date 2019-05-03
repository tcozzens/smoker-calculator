import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseFlowComponent } from './reverse-flow.component';

describe('ReverseFlowComponent', () => {
  let component: ReverseFlowComponent;
  let fixture: ComponentFixture<ReverseFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReverseFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReverseFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
