import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input()
  isliked = false;
  @Output()
  onFavouriteChnage = new EventEmitter<boolean>();

  toggleStar() {
    this.isliked = !this.isliked;
    this.onFavouriteChnage.emit(this.isliked);
  }
}
