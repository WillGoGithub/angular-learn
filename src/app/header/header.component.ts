import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  title = '圖片';
  page = 'Test';
  url = 'http://blog.miniasp.com/';
  counter = 0;

  constructor() {
    setTimeout(() => {
      this.page = '首頁';
    }, 2000);
  }

  changeTitle($event: MouseEvent) {
    if ($event.altKey === true) {
      this.title = '+ Alt';
    }

    this.title = '新標題';
    this.counter++;
    console.log($event);
  }

  fontSizeChange() {
    return { 'font-size': (12 + this.counter) + 'px' };
  }

  ngOnInit() {
  }

}
