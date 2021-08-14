import { Component } from '@angular/core';
import { AutherService } from './Services/auther.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _authersService: AutherService) {}
  title = 'My First HelloWorldApp';
  appcomp = 'Parent Key 111';
  appValue = 'Parent Value 11';
  items: string[] = ['item1', 'item2', 'item3'];
  authers = this._authersService.GetAuthers();
  colspan = 2;
  colorActive = true;
  inputField: string =
    'a pipe takes in data as input and transfor to desire output';
  myStyles = {
    'background-color': 'lime',
    'font-size': '20px',
    'font-weight': 'bold',
  };
  AddItems(newItem: string) {
    this.items.push(newItem);
  }

  time1111r = setTimeout(() => {
    this.appcomp = 'changed Key';
    this.appValue = 'changed value';
  }, 1000);

  RemoveItem(item: string) {
    debugger;
    if (item === '') return;
    this.items = this.items.filter((x) => x !== item);
  }
  FavouriteChanged(isLiked: boolean) {
    console.log('favourite star ', isLiked);
    // alert(`Star filled from app Component ${isLiked}`);
  }
}
