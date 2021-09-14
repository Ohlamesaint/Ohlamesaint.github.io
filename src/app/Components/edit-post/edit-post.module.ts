import { NgModule } from "@angular/core";
import { EditPostComponent } from "./edit-post.component";
import { EditormdModule } from "../editormd/editormd.module";

@NgModule({
    declarations: [EditPostComponent],
    imports: [EditormdModule],
    exports: [EditPostComponent]
})

export class EditPostModule {};