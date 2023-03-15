import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { RateAnxietyComponentModule } from '../rate-anxiety/rate-anxiety.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SelectFoodComponentModule } from '../select-food/select-food.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RateAnxietyComponentModule,
    SelectFoodComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
