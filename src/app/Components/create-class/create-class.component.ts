import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { ClassPost } from 'src/app/Classes/class-post';
import { ClassService } from 'src/app/Services/class.service';
import { PostService } from 'src/app/Services/post.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Swiper } from 'swiper';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { EditormdComponent } from '../editormd/editormd.component';
import { EditorConfig } from '../../Directives/editor/model/editor-config'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

declare var $: any;
declare var editormd: any;


@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateClassComponent implements OnInit, AfterViewInit {

  editorConfig = new EditorConfig();
  swiper: any;
  editor: any;
  model: ClassPost  = new ClassPost();
  config = { simulateTouch: false };
  @ViewChild('f') form: any;
  @ViewChild('swiperWrapper') swiperWrapper: any;
  @ViewChild('controller') editorTag: any;

  semester : String[] = [
    'Master of first grade, first half',
    'Master of first grade, second half',
    'Master of second grade, first half',
    'Master of second grade, second half',
  ]

  constructor( private classService : ClassService,
               private router : Router
  ) { 
   }

  ngOnInit(): void {
    if($('#editormd').length > 0)
      this.editor = editormd('editormd', this.editorConfig);
  }


  ngAfterViewInit(){
    this.swiperWrapper.swiperRef.slideNext();
  }

  onNext(){
    this.swiperWrapper.swiperRef.slideNext();
  }

  onPrev(){
    this.swiperWrapper.swiperRef.slidePrev();
  }

  emitIntro(){
    this.editorTag.updateMarkdown();
    console.log(this.model);
  }
  
  onSubmit(){
    console.log(this.model);
    // if(this.form.valid){
    //   console.log(this.form.value);
    //   this.form.reset();
    //   // this.router.navigate([`/classes`]);
    // } 
  }
}
