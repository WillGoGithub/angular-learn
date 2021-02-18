import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getArticles() {
    return this.http.get('/api/articles.json');
  }

  deleteArticle(item) {
    return this.http.delete('/api/articles/' + item.id);
  }

  modifyArticle(post: any) {
    return this.http.put('/api/articles/' + post.id, post);
  }
}
