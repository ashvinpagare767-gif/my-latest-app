import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MyService } from '../services/my-service';

export interface MyUserList{
  id:number
  title: string,
  completed: boolean
}


@Component({
  selector: 'app-user-list-component',
  imports: [CommonModule],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.scss',
})
export class UserListComponent {
  userListData: MyUserList[] = [];
  constructor(private myService : MyService){
     this.getUserList();
  }


  getUserList(){
    this.myService.getData().subscribe((response)=>{
       console.log('response',response);
       this.userListData=response;
    });
  }

}
