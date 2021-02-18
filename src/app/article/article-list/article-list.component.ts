import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/article/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {

  data$: Observable<any>;

  constructor(public dataSvc: DataService) { }

  ngOnInit() {
    this.data$ = this.dataSvc.getArticles();
  }

  // removeArtivle(item) {
  //   this.dataSvc.deleteArticle(item).subscribe(result => {
  //     this.data = this.data.filter((v) => {
  //       return v.id !== item.id;
  //     });
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  // changeTitle(post: any) {
  //   this.dataSvc.modifyArticle(post).subscribe(result => {
  //     this.data = this.data.map((item) => {
  //       if (item.id === post.id) {
  //         return Object.assign({}, item, post);
  //       }

  //       return item;
  //     });
  //   }, error => {
  //     console.log(error);
  //   });
  // }
}
