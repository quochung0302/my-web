import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkAboutComponent } from './homework-about.component';

describe('HomeworkAboutComponent', () => {
  let component: HomeworkAboutComponent;
  let fixture: ComponentFixture<HomeworkAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
