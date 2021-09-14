import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from 'src/app/Services/class.service';


declare var $: any;
declare var editormd: any;

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.css']
})
export class ClassPageComponent implements OnInit {

  public id : any;

  constructor( private route: ActivatedRoute,
               private classService: ClassService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.classService.getClassById(this.id).subscribe(
      data => {
        console.log(data);
        $('textarea').html = data.markdown;
        this.decoration();
      }
    )
  }

  decoration(){
    editormd.markdownToHTML("content2", {
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
