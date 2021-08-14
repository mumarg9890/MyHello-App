import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css'],
})
export class LikesComponent implements OnInit {
  constructor() {}
  @Input()
  likesCount: number = 0;
  @Input()
  IsActive: boolean = false;
  ngOnInit(): void {}
  LikeClicked() {
    this.IsActive = !this.IsActive;
    this.IsActive ? (this.likesCount += 1) : (this.likesCount -= 1);
  }
}
