import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjFoglalasComponent } from './uj-foglalas.component';

describe('UjFoglalasComponent', () => {
  let component: UjFoglalasComponent;
  let fixture: ComponentFixture<UjFoglalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UjFoglalasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UjFoglalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
