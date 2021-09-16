import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Classes/post';
import { PostService } from 'src/app/Services/post.service';

declare var $ : any;

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public post: Post = new Post();
  public value: any;
  public type: any;
  public classId: any;
  public tagList: string[] = [];
  public testList: string[] = [ 'Spring', 'Angular', 'Frontend', 'Backend', 'Nodejs', 'Expressjs'];

  @ViewChild('f') form: any;

  constructor(private postService: PostService,
    private router: Router,
    private route: ActivatedRoute) {
    this.post.classType = this.route.snapshot.queryParamMap.get('value') || "";
    this.classId = this.route.snapshot.queryParamMap.get('id');
    this.post.type = this.route.snapshot.queryParamMap.get('type') || "";
  }

  ngOnInit(): void {


    if (this.type == "Class") {

    } else if (this.type == "Serie") {

    } else if (this.type == "Null") {

    }
  }

  toggleTag(e: Event, tag: string){
    $(e.target).toggleClass('active');
    let index;
    if((index = this.tagList.indexOf(tag)) == -1)
      this.tagList.push(tag);
    else
      this.tagList.splice(index, 1);
    console.log(this.tagList);
  }

  createPost(post: Post) {
    this.postService.createPost(post).subscribe(
      (data => {
        console.log(data);
        this.goToPostList();
      })
    )
  }

  goToPostList() {
    this.router.navigate([`/Post-List`]);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.post.active = false;
    this.createPost(this.post);
  }
}
