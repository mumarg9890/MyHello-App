import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css'],
})
export class ChildComComponent implements OnInit {
  ngOnInit(): void {}
  constructor() {}
  @Input()
  ParentComponentName: string = '';
  @Input()
  ParentComponentValue: string = '';

  @Output()
  newItemEvent = new EventEmitter<string>();

  AddNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
