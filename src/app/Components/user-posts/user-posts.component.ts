import { Component, Input, OnInit } from '@angular/core';
import { UserDetailsService } from '../../Services/user-details.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  postsData: any;
  @Input() userId;

  constructor(private getData: UserDetailsService) {}

  ngOnInit() {
    if (this.userId) {
      console.log('init' + this.userId);
    }
  }

  ngOnChanges() {
    if (this.userId) {
      console.log('onchange' + this.userId);
      this.getData.getUserPosts(this.userId).subscribe((response) => {
        this.postsData = response;
      });
    }
  }
}
