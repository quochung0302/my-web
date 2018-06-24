import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkFooterComponent } from './homework-footer.component';

describe('HomeworkFooterComponent', () => {
  let component: HomeworkFooterComponent;
  let fixture: ComponentFixture<HomeworkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
