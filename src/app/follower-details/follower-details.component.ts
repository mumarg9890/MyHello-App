import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-follower-details',
  templateUrl: './follower-details.component.html',
  styleUrls: ['./follower-details.component.css'],
})
export class FollowerDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  Id: number | undefined;
  ngOnInit(): void {
    this.route.params.subscribe((x: any) => {
      console.log('follwerID', x.followerId);
      console.log('followerName', x.followerName);
    });
  }
}
