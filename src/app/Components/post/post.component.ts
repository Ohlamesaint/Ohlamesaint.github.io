import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Classes/post';
import { PostService } from 'src/app/Services/post.service';
import { EditorConfig } from "../../Directives/editor/model/viewer-config";

declare var $: any;
declare var editormd: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post: Post = new Post();
  private id: Number = 0;
  private conf = new EditorConfig();

  constructor( private postService: PostService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.getPostById(this.id).subscribe(
      data => {
        console.log(data);
        this.post = data;
        $("textarea").html(data.markdown);
        this.decoration();
      }
    );
  }

  decoration(){
    editormd.markdownToHTML("content", {
      htmlDecode      : "style,script,iframe",  // you can filter tags decode
      emoji           : true,
      taskList        : true,
      tex             : true,  // 默认不解析
      flowChart       : true,  // 默认不解析
      sequenceDiagram : true,  // 默认不解析
      tocm : true,//菜单
      tocContainer : "",
      tocDropdown   : false
  });
  }

}
