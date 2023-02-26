import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {
    this.realData = [];
    this.init();
  }

  realData: User[];
  init(): void {
    this.userService.getRealUsers().subscribe((result) => {
      this.realData = result;
    });
  }

  getRealData(): User[] {
    return this.realData;
  }

  ngOnInit(): void {}
}
