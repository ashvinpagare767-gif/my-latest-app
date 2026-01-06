import { CommonModule, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MyService } from '../services/my-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

export interface Todo{
  id:number
  todo: string,
  completed: string;
  userId: string;
};
interface TodoResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
};

@Component({
  selector: 'app-user-list-component',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  todos: Todo[] = [];
  total = 0;
  pageSize = 10;
  currentPage = 1;
  loading = false;

  dataEnable=false;
  loginForm:any;
  private destroyRef = inject(DestroyRef);
  constructor(private myService : MyService){
    this.loginForm= new FormGroup({
      todo: new FormControl(''),
      completed: new FormControl(''),
      userId: new FormControl(''),
    })
  }
 ngOnInit(): void {
   this.fetchTodos();
 }

 fetchTodos() : void{
  this.loading = true;

    const skip = (this.currentPage - 1) * this.pageSize;

   this.myService.getUserData(this.currentPage,skip).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
    next: res => {
      this.todos = res.todos;
      this.total = res.total;
      this.loading = false;
    },
    error: () => {
      this.loading = false;
    }
  });
 }

 submitForm(): void {
  const payload = {
    "todo": this.loginForm?.value?.todo,
    "completed": this.loginForm?.value?.completed,
    "userId": this.loginForm?.value?.userId
  };
this.myService.postData(payload).subscribe(
response => console.log('Success:', response),
error => console.error('Error:', error)
);
}

get totalPages(): number {
  return Math.ceil(this.total / this.pageSize);
}

changePage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.fetchTodos();
  }
}

}
