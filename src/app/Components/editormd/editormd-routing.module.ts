import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditormdComponent } from './editormd.component';

const routes: Routes = [{ path: '**', component: EditormdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditormdRoutingModule {}
