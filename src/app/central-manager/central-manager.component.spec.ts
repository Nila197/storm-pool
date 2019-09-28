import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralManagerComponent } from './central-manager.component';

describe('CentralManagerComponent', () => {
  let component: CentralManagerComponent;
  let fixture: ComponentFixture<CentralManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
