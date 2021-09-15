import { NgModule } from "@angular/core";
import { EditormdModule } from "../editormd/editormd.module";
import { ClassPageComponent } from "./class-page.component";


@NgModule({
    declarations: [ClassPageComponent],
    imports: [EditormdModule],
    exports:[ClassPageModule]
})

export class ClassPageModule {};