import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { CreateClassComponent } from './Components/create-class/create-class.component';
import { CreatePostComponent } from './Components/create-post/create-post.component';
import { EditPostComponent } from './Components/edit-post/edit-post.component';
import { PostListComponent } from './Components/post-list/post-list.component';
import { PostComponent } from './Components/post/post.component';

const routes: Routes = [
  { path:'About-Me', component: AboutMeComponent},
  { path:'Create-Post', component: CreatePostComponent},
  { path:'Post-List', component: PostListComponent},
  { path:'View-Post/:id', component: PostComponent},
  { path:'Edit-Post/:id', component: EditPostComponent },
  { path:'Create-Class', component: CreateClassComponent},
  {
    path: '**',
    redirectTo: 'About-Me', pathMatch : "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
