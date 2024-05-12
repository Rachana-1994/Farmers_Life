import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Task} from './task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  taskArray: Task[] = [new Task(false,'Fertilizer spray', false, new Date())];
  // taskArray: Task[] = []; //empty task list

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.monthUpdate.subscribe((date:string)=>{
      console.log(date);
    })
  }

  onSubmit(form: NgForm){
    console.log(form);
    this.taskArray.push({
      isCompleted:false,
      taskName: form.controls['task'].value,
      isEditable: false,
      month: new Date()
    })
    form.reset();
  }

  onDelete(index: number){
    this.taskArray.splice(index,1);
  }

  onCheck(index: number){
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index:number){
    this.taskArray[index].isEditable = true;
  }

  onSave(index:number, taskInput: string){
    this.taskArray[index].taskName = taskInput;
    this.taskArray[index].isEditable = false;
  }

}
