import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.less']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {

  @Input()
  item;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  oldTitle;
  newTitle;
  isEditable = false;

  constructor() { }

  ngOnChanges(changes) {
    if (changes.item) {
      this.oldTitle = changes.item.currentValue;
      this.item = Object.assign({}, this.oldTitle);
    }
  }

  ngOnInit() {
    this.newTitle = this.item.title;
  }

  changeTitle() {
    this.titleChanged.emit(this.item);
  }

  cancleEdit() {
    this.item = Object.assign({}, this.oldTitle);
    this.isEditable = false;
  }

  editOnClicked() {
    this.isEditable = !this.isEditable;

    if (this.isEditable === false) {
      this.cancleEdit();
    }
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }
}
