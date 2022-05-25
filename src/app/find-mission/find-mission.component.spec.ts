import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMissionComponent } from './find-mission.component';

describe('FindMissionComponent', () => {
  let component: FindMissionComponent;
  let fixture: ComponentFixture<FindMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
