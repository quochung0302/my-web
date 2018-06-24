import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkSocialComponent } from './homework-social.component';

describe('HomeworkSocialComponent', () => {
  let component: HomeworkSocialComponent;
  let fixture: ComponentFixture<HomeworkSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
