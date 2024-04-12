import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyResturantComponent } from './modify-resturant.component';

describe('ModifyResturantComponent', () => {
  let component: ModifyResturantComponent;
  let fixture: ComponentFixture<ModifyResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifyResturantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
