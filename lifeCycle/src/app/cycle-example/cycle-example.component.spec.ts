import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleExampleComponent } from './cycle-example.component';

describe('CycleExampleComponent', () => {
  let component: CycleExampleComponent;
  let fixture: ComponentFixture<CycleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
