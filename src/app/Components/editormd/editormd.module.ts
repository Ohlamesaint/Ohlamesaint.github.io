import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditormdComponent } from './editormd.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditormdComponent],
  imports: [CommonModule, FormsModule],
  exports: [EditormdComponent]
})

export class EditormdModule {}
