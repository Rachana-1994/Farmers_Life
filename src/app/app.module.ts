import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ExpenseManagerComponent } from './expense-manager/expense-manager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { setTheme } from 'ngx-bootstrap/utils';
import { DatePipe } from '@angular/common';
setTheme('bs5'); // or 'bs4'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskManagerComponent,
    ExpenseManagerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
