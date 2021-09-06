import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutMeComponent } from "./Components/about-me/about-me.component";
import { NoteListComponent } from "./Components/note-list/note-list.component";

const routes: Routes=[
    { path: 'Aboutme', component: AboutMeComponent},
    { path: 'Note-List', component: NoteListComponent},
    { path: '', redirectTo: 'Aboutme', pathMatch: 'full'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
