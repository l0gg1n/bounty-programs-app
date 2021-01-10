import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugcrowdComponent } from './bugcrowd.component';

describe('BugcrowdComponent', () => {
  let component: BugcrowdComponent;
  let fixture: ComponentFixture<BugcrowdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugcrowdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugcrowdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
