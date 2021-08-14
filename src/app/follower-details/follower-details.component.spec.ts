import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerDetailsComponent } from './follower-details.component';

describe('FollowerDetailsComponent', () => {
  let component: FollowerDetailsComponent;
  let fixture: ComponentFixture<FollowerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
