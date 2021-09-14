import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Classes/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = "https://shang-blog.herokuapp.com/api/v1/posts";

  constructor( private httpClient: HttpClient ) {  }

  getPostList() : Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.baseUrl}`);
  }

  createPost(post: Post) : Observable<Object>{
    return this.httpClient.post<Object>(`${this.baseUrl}`, post);
  }

  getPostById(id: Number): Observable<Post>{
    return this.httpClient.get<Post>(`${this.baseUrl}/${id}`);
  }

  updatePost(post: Post) : Observable<Object>{
    return this.httpClient.put<Post>(`${this.baseUrl}/${post.id}`, post);
  }
}
