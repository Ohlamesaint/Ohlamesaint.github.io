import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/Classes/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public postList: Post[] = [];

  constructor( private postService: PostService,
               private router: Router ) { }

  ngOnInit(): void {
    this.getPostList();
  }

  viewPost(id: number){
    this.router.navigate([`/View-Post/${id}`]);
  }

  editPost(id: number){
    this.router.navigate([`/Edit-Post/${id}`]);
  }

  getPostList(){
    this.postService.getPostList().subscribe(
      data => {
        this.postList = data;
      }
    )
  }

}


