import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmComponent } from './read.component';

describe('AlarmComponent', () => {
  let component: AlarmComponent;
  let fixture: ComponentFixture<AlarmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlarmComponent]
    });
    fixture = TestBed.createComponent(AlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
