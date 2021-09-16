import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassPost } from 'src/app/Classes/class-post';
import { Post } from 'src/app/Classes/post';
import { ClassService } from 'src/app/Services/class.service';


declare var $: any;
declare var editormd: any;

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent implements OnInit {

  public id: any;
  public model: ClassPost = new ClassPost();
  public accordion: any[] = [
    { title: "隨堂筆記", value: "note", content: [] }, 
    { title: "作業報告", value: "homework", content: [] }, 
    { title: "其他", value: "other", content: [] }
  ]

  constructor(private route: ActivatedRoute,
              private classService: ClassService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.classService.getClassById(this.id).subscribe(
      data => {
        this.model = data;
        console.log(this.model.markdown)
        $("textarea").val(data.markdown);
        this.decoration();
      }
    )
  }

  decoration() {
    console.log($("textarea").html);
    editormd.markdownToHTML("content_editor", {
      htmlDecode: "style,script,iframe",  // you can filter tags decode
      emoji: true,
      taskList: true,
      tex: true,  // 默认不解析
      flowChart: true,  // 默认不解析
      sequenceDiagram: true,  // 默认不解析
      tocm: true,//菜单
      tocContainer: "",
      tocDropdown: false
    });
  }

  ngOnDestroy(){
    localStorage.clear();
  }

  addNotePost(id: Number, value: String){
    this.router.navigate(['/Create-Post'], {queryParams: {id, value, type: "Class"}});
  }

  // toggle the event target accordion
  accordionToggle(e: Event, type: any) {
    let target = $(e.target);
    target.toggleClass('collapsed');
    if (!target.hasClass('collapsed')) {
      target.parent().parent().children('.collapse').removeClass('collapse').addClass('collapsing').css("height", 'auto');
      setTimeout(() => {
        target.parent().parent().children('div').removeClass('collapsing').addClass('collapse').removeAttr('height').toggleClass('show');
      }, 300);
      if(type.content.length==0){
        this.classService.getPostByClassType(this.model.id, type.value).subscribe(
          data => {
            type.content = data.reverse();
            target.parent().parent().children('div').css("height", "max-content");
            console.log("trigger");
          }
        )  
      }
    } else {
      target.parent().parent().children('.collapse').removeClass('collapse').removeClass('show').addClass('collapsing').css("height", '0px');
      setTimeout(() => {
        target.parent().parent().children('div').removeClass('collapsing').addClass('collapse').removeAttr('height');
      }, 300);
    }
  }
}
