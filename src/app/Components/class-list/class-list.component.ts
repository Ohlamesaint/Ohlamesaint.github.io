import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClassPost } from 'src/app/Classes/class-post';
import { ClassService } from 'src/app/Services/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {


  @ViewChild('f') form : any;

  public targetSemester: String = "";
  public classes: ClassPost[] = [];

  public semester: String[] = [
    'Master_of_first_grade_First_half',
    'Master_of_first_grade_Second_half',
    'Master_of_second_grade_First_half',
    'Master_of_second_grade_Second_half',
  ]

  constructor( private classService: ClassService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  onChange(e: Event){
    console.log(this.targetSemester);
    this.classService.getClassBySemester(this.targetSemester).subscribe(
      data => {
        this.classes = data;
      }
    )
  }

  goToClass(id : any){
    this.router.navigate([`Class-Page/${id}`]);
  }

}
