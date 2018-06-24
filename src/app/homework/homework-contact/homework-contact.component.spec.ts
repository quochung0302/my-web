import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkContactComponent } from './homework-contact.component';

describe('HomeworkContactComponent', () => {
  let component: HomeworkContactComponent;
  let fixture: ComponentFixture<HomeworkContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
