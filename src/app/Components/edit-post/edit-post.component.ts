import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Classes/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
  host: {'window:beforeunload':'updatePost'}
})
export class EditPostComponent implements OnInit, OnDestroy {

  post: Post = new Post();
  trans: Boolean = false;
  private id: Number = 0;

  constructor(private postService: PostService,
    private router: Router,
    private urlParse: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.urlParse.snapshot.params['id'];
    this.postService.getPostById(this.id).subscribe(
      data => {
        this.post = data;
      }
    )
  }


  ngOnDestroy() {
    
    // for safe, saving data again before leaving this page

    this.postService.updatePost(this.post).subscribe(
      data => {
        console.log(data);
      }
    )
  }


  setTrans(){
    this.trans = true;
  }

  updatePost(post:Post, trans: Boolean){
    this.postService.updatePost(this.post).subscribe(
      data => {
        console.log(data);
        if(trans){
          this.goToView();
        }
      }
    )
  }

  goToView() {
    this.router.navigate([`/View-Post/${this.post.id}`]);
  }

}
