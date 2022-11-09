import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../Services/user-details.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userData: any;
  uid: any;

  constructor(private getData: UserDetailsService) {}

  ngOnInit() {
    // Get the User list
    this.getData.getUserData().subscribe((response) => {
      this.userData = response;
    });
  }

  changeUserId(e) {
    console.log('User selection Id' + e.value);
    this.uid = e.value;
  }
}
