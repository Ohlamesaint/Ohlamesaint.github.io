import { NgModule } from "@angular/core";
import { EditormdModule } from "../editormd/editormd.module";
import { CreateClassComponent } from "./create-class.component";
import { SwiperModule } from 'swiper/angular';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';




@NgModule({
    declarations: [CreateClassComponent],
    imports: [EditormdModule, SwiperModule, FontAwesomeModule, FormsModule, CommonModule],
    exports: [CreateClassComponent]
})

export class CreateClassModule {
    constructor(library: FaIconLibrary){
        library.addIcons(faAngleDoubleRight)
        library.addIcons(faAngleDoubleLeft)
    }
};
