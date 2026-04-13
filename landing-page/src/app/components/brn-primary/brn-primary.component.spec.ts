import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrnPrimaryComponent } from './brn-primary.component';

describe('BrnPrimaryComponent', () => {
  let component: BrnPrimaryComponent;
  let fixture: ComponentFixture<BrnPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrnPrimaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrnPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
