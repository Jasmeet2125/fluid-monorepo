import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';

@NgModule({
  imports: [CommonModule, ExpansionPanelModule],
  exports: [ExpansionPanelModule]
})
export class FluidModule {}
