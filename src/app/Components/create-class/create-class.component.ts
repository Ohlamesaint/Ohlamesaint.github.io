import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ClassPost } from 'src/app/Classes/class-post';
import { ClassService } from 'src/app/Services/class.service';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Swiper } from 'swiper';
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
  model: ClassPost = new ClassPost();
  config = { simulateTouch: false };
  @ViewChild('f') form: any;
  @ViewChild('swiperWrapper') swiperWrapper: any;
  @ViewChild('controller') editorTag: any;

  semester: String[] = [
    'Master_of_first_grade_First_half',
    'Master_of_first_grade_Second_half',
    'Master_of_second_grade_First_half',
    'Master_of_second_grade_Second_half',
  ]

  constructor(private classService: ClassService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    if ($('#editormd').length > 0)
      this.editor = editormd('editormd', this.editorConfig);
  }


  ngAfterViewInit() {
    this.swiperWrapper.swiperRef.slideNext();
  }

  onNext() {
    this.swiperWrapper.swiperRef.slideNext();
  }

  onPrev() {
    this.swiperWrapper.swiperRef.slidePrev();
  }

  onSubmit() {
    this.editorTag.updateMarkdown();
    this.classService.creatClass(this.model).subscribe(
      data => {
        console.log(this.model);
        this.router.navigate([`/Class-Page/${data.id}`])
      }
    );
  }
}
