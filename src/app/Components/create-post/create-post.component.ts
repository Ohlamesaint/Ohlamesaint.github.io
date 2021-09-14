import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Classes/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  public post: Post = new Post();

  constructor( private postService: PostService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  createPost(post: Post){
    this.postService.createPost(post).subscribe(
      (data => {
        console.log(data);
        this.goToPostList();
      })
    )
  }

  goToPostList(){
    this.router.navigate([`/Post-List`]);
  }

  onSubmit(event: Event){
    event.preventDefault();
    this.post.active = false;
    this.createPost(this.post);
  }
}
