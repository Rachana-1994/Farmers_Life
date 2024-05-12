import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  modelDate;
  constructor(private datePipe:DatePipe, private taskService:TaskService) {
    this.modelDate = this.datePipe.transform(new Date(),'MM/yyyy');
   }

  ngOnInit() {
  }

  onOpenCalendar(container: any) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };     
    container.setViewMode('month');
  }

  onChange(date:Date){
    this.modelDate = this.datePipe.transform(date,'MM/yyyy');
    this.taskService.monthUpdate.next(this.modelDate);
  }
}
