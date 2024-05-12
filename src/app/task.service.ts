import { Subject } from "rxjs";

export class TaskService {
   monthUpdate = new Subject<string>(); 
}