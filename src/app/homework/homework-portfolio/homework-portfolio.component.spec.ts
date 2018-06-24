import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkPortfolioComponent } from './homework-portfolio.component';

describe('HomeworkPortfolioComponent', () => {
  let component: HomeworkPortfolioComponent;
  let fixture: ComponentFixture<HomeworkPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
