import { CommonModule, NgFor } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MyService } from '../services/my-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface MyUserList{
  id:number
  email: string,
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'app-user-list-component',
  imports: [CommonModule],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.scss',
})
export class UserListComponent implements OnInit {
  userListData: MyUserList[] = [];
  private destroyRef = inject(DestroyRef);
  constructor(private myService : MyService){
    
  }
 ngOnInit(): void {
    this.getUserList();
 }


  getUserList(){
    this.myService.getEmployees().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((response)=>{
       console.log('response',response.users);
       this.userListData=response['users'];
    });
  }

}
