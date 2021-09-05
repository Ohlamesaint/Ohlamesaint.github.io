import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NoteListComponent } from './Components/note-list/note-list.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
