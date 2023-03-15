import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectFoodComponent } from './select-food.component';

describe('SelectFoodComponent', () => {
  let component: SelectFoodComponent;
  let fixture: ComponentFixture<SelectFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectFoodComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
