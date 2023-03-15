import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateAnxietyComponent } from './rate-anxiety.component';

describe('RateAnxietyComponent', () => {
  let component: RateAnxietyComponent;
  let fixture: ComponentFixture<RateAnxietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateAnxietyComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateAnxietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
