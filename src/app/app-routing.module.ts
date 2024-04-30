import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskManagerComponent } from './task-manager/task-manager.component';
import { ExpenseManagerComponent } from './expense-manager/expense-manager.component';
import { ContactBookComponent } from './contact-book/contact-book.component';


const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskManagerComponent },
  { path: 'expenses', component: ExpenseManagerComponent },
  { path: 'contacts', component: ContactBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
