import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public Task:any = [];
  public deletedDate:any = undefined;
  public createdDate:any = new Date().toLocaleDateString();



  constructor() { }

  ngOnInit(): void {
  }

  public addTask(task:any):void{
    var obj:any = {
      taskName:task,
      Status:'active',
      Date:this.createdDate
    }
    this.Task.push(obj)
  }

  public taskStatus(data:any,status:string):void{
    var obj = this.Task.filter((ob:any)=>data.taskName != ob.taskName)
    this.Task = obj
    data.Date = new Date().toLocaleDateString()
    data.Status = status
    this.Task.push(data)
    console.log(this.Task)
  }

  
}
