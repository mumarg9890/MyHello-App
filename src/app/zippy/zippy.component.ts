import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input('title')
  title: string = '';
  isExpanded: boolean = true;

  ToggleHeading() {
    this.isExpanded = !this.isExpanded;
  }
}
