import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSerieuseComponent } from './page-serieuse.component';

describe('PageSerieuseComponent', () => {
  let component: PageSerieuseComponent;
  let fixture: ComponentFixture<PageSerieuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSerieuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSerieuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
