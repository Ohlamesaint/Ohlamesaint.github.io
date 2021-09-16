import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {


  private baseUrl = "https://shang-blog.herokuapp.com/api/v1/tags";

  constructor( private httpclient: HttpClient) { }

  getAllTags(): Observable<string[]>{
    return this.httpclient.get<string[]>(`${this.baseUrl}`);
  }
  
}
