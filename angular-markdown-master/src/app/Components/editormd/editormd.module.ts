import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditormdRoutingModule } from './editormd-routing.module';
import { EditormdComponent } from './editormd.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [EditormdComponent],
  imports: [CommonModule, EditormdRoutingModule, FormsModule],
})
export class EditormdModule {}
