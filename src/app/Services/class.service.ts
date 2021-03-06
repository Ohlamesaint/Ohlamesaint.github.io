import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClassPost } from '../Classes/class-post';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  baseUrl: String = `https://shang-blog.herokuapp.com/api/v1/classes`;

  constructor( private httpClient: HttpClient ) {  }

  creatClass(classPost : ClassPost) : Observable<ClassPost> {
    return this.httpClient.post<ClassPost>(`${this.baseUrl}`, classPost);
  }
  
}
