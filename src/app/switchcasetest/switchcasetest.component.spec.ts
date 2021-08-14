import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchcasetestComponent } from './switchcasetest.component';

describe('SwitchcasetestComponent', () => {
  let component: SwitchcasetestComponent;
  let fixture: ComponentFixture<SwitchcasetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchcasetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchcasetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
