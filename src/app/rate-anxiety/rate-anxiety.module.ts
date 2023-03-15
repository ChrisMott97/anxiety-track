import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RateAnxietyComponent } from './rate-anxiety.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [RateAnxietyComponent],
  exports: [RateAnxietyComponent]
})
export class RateAnxietyComponentModule {}
