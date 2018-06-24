import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkArticleComponent } from './homework-article.component';

describe('HomeworkArticleComponent', () => {
  let component: HomeworkArticleComponent;
  let fixture: ComponentFixture<HomeworkArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
