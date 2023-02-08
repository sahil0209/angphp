import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmoviesComponent } from './lmovies.component';

describe('LmoviesComponent', () => {
  let component: LmoviesComponent;
  let fixture: ComponentFixture<LmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
