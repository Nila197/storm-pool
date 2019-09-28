import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemOperatorComponent } from './system-operator.component';

describe('SystemOperatorComponent', () => {
  let component: SystemOperatorComponent;
  let fixture: ComponentFixture<SystemOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
