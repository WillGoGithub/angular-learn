import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {
  keyword = '';
  wordCount = 0;

  onKeywordChange($event: KeyboardEvent) {
    const $target = <HTMLInputElement>$event.target;

    if ($event.key === 'Escape') {
      $target.value = '';
    }

    this.wordCount = $target.value.length;
  }

  resetKeyword() {
    this.keyword = '';
  }

  ngOnInit() {
  }
}
