import { NgModule } from "@angular/core";
import { EditormdModule } from "../editormd/editormd.module";
import { PostComponent } from "./post.component";

@NgModule({
    declarations: [PostComponent],
    imports: [EditormdModule],
    exports:[PostModule]
})

export class PostModule {};