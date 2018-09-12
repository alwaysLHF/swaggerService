import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShowProjectComponent } from './create-show-project.component';

describe('CreateShowProjectComponent', () => {
  let component: CreateShowProjectComponent;
  let fixture: ComponentFixture<CreateShowProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateShowProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateShowProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
