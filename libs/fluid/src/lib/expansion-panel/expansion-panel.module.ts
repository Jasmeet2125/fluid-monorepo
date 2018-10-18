import { NgModule } from '@angular/core';
import { ExpansionPanelComponent } from './expansion-panel.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [ExpansionPanelComponent],
  exports: [ExpansionPanelComponent]
})
export class ExpansionPanelModule {}
