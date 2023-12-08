import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPostComponent } from './other-post.component';

describe('OtherPostComponent', () => {
  let component: OtherPostComponent;
  let fixture: ComponentFixture<OtherPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
