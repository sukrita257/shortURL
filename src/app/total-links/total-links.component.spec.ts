import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLinksComponent } from './total-links.component';

describe('TotalLinksComponent', () => {
  let component: TotalLinksComponent;
  let fixture: ComponentFixture<TotalLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
