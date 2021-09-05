import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Components/about-me/about-me.component';

const routes: Routes = [
  { path:'About-Me', component: AboutMeComponent},
  {
    path: 'editor',
    loadChildren: () =>
      import('./Components/editormd/editormd.module').then((mod) => mod.EditormdModule),
  },
  {
    path: 'show',
    loadChildren: () =>
      import('./Components/md-show/md-show.module').then((mod) => mod.MdShowModule),
  },
  {
    path: '**',
    redirectTo: 'editor',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
