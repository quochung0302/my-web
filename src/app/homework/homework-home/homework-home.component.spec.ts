import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkHomeComponent } from './homework-home.component';

describe('HomeworkHomeComponent', () => {
  let component: HomeworkHomeComponent;
  let fixture: ComponentFixture<HomeworkHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
