import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdShowComponent } from './md-show.component';

const routes: Routes = [{ path: '**', component: MdShowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdShowRoutingModule {}
