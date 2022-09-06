import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyskillsComponent } from './hyskills.component';

describe('HyskillsComponent', () => {
  let component: HyskillsComponent;
  let fixture: ComponentFixture<HyskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
