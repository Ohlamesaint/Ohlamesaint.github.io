import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { CreatePostComponent } from './Components/create-post/create-post.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { PostListComponent } from './Components/post-list/post-list.component';
import { PostComponent } from './Components/post/post.component';
import { EditPostModule } from './Components/edit-post/edit-post.module';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCalendarPlus, faIdBadge, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap, faSchool, faAngleRight, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { SwiperModule } from 'swiper/angular';
import { CreateClassModule } from './Components/create-class/create-class.module';
import { ClassListComponent } from './Components/class-list/class-list.component';
import { ClassPageComponent } from './Components/class-page/class-page.component';


@NgModule({
  declarations: [AppComponent,  AboutMeComponent, CreatePostComponent, SideBarComponent, PostListComponent, PostComponent, 
    ClassListComponent, ClassPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EditPostModule,
    FontAwesomeModule,
    SwiperModule,
    CreateClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(library: FaIconLibrary){
    library.addIcons(faCalendarPlus);
    library.addIcons(faIdBadge);
    library.addIcons(faGraduationCap);
    library.addIcons(faSchool);
    library.addIcons(faAngleRight);
    library.addIcons(faChalkboardTeacher);
    library.addIcons(faPlusSquare)
  }

}