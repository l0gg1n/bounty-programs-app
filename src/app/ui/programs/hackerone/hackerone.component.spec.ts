import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackeroneComponent } from './hackerone.component';

describe('HackeroneComponent', () => {
  let component: HackeroneComponent;
  let fixture: ComponentFixture<HackeroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackeroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HackeroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
