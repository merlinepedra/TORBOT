import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrawlUrlComponent } from './crawl-url.component';

describe('CrawlUrlComponent', () => {
  let component: CrawlUrlComponent;
  let fixture: ComponentFixture<CrawlUrlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrawlUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrawlUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
